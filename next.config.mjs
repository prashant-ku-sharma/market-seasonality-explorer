/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FMP_API_KEY: process.env.FMP_API_KEY,
  },
};

export default nextConfig;
