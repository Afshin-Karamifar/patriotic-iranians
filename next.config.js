/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "localhost"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
