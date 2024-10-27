import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@use "styles/variables" as *; @use "styles/mixins" as *;',
  },
};

export default withNextIntl(nextConfig);
