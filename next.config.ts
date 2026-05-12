import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "framer.com" },
    ],
  },
};

export default nextConfig;
