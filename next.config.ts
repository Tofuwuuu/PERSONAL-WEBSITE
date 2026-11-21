import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/",
        permanent: false,
      },
      {
        source: "/resume.pdf",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

