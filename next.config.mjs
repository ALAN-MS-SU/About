/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/183554060",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/Projects/**",
      },
    ],
  },
};

export default nextConfig;
