/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "localhost"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
