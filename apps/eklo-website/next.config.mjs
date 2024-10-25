import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    additionalData: '@import "styles/variables.scss";',
  },
};

export default withNextIntl(nextConfig);
