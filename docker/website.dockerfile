FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat && corepack enable pnpm

WORKDIR /app

FROM base AS builder

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./ 
COPY ./apps/eklo-website/package.json ./apps/eklo-website/

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpx nx run @eklo/website:build

FROM base AS runner

COPY --from=builder /app/apps/eklo-website/.next/standalone ./ 
COPY --from=builder /app/apps/eklo-website/public ./apps/eklo-website/public
COPY --from=builder /app/apps/eklo-website/.next/static ./apps/eklo-website/.next/static

WORKDIR /app/apps/eklo-website

ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
  adduser --system --uid 1001 nextjs && \
  chown -R nextjs:nodejs .next

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]