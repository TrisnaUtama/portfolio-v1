import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["storage.trisnautama.site"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  reactStrictMode: false,
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
