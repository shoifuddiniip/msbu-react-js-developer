import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Needed if using styled-components
  },
};

export default nextConfig;
