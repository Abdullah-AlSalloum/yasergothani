import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ads",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
