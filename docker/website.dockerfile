FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
RUN corepack enable pnpm


# Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY ./apps/eklo-website/package.json ./apps/eklo-website/

RUN pnpm install --frozen-lockfile

COPY . .

RUN npx nx run @eklo/website:build

FROM base AS deploy
WORKDIR /app

COPY --from=builder /app/apps/eklo-website/.next/standalone ./

WORKDIR /app/apps/eklo-website

COPY --from=builder /app/apps/eklo-website/public ./public
COPY --from=builder /app/apps/eklo-website/.next/static ./.next/static/



FROM deploy AS runner

WORKDIR /app/apps/eklo-website

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000
ENV PORT=3000

# # server.js is created by next build from the standalone output
# # https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]

# CMD [ "sh" ]