/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["patriotics.s3.eu-west-2.amazonaws.com", "localhost"],
    formats: ["image/avif", "image/webp", "image/png", "image/jpeg"],
  },
};

module.exports = nextConfig;
