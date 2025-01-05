import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  basePath: "/next-report-app", // Required for Github Pages
};

export default nextConfig;
