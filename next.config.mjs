/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FMP_API_KEY: process.env.FMP_API_KEY,
    FMP_SERVICE: process.env.FMP_SERVICE,
  },
};

export default nextConfig;
