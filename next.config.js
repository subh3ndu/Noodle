/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["picsum.photos", "www.google.com", "www.unsplash.com"],
  },
};

module.exports = nextConfig;
