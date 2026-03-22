import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Custom webpack configuration
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
