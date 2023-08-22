const { useAuth } = require("./src/store");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/app/home",
        permanent: true,
      },
      {
        source: "/app",
        destination: "/app/home",
        permanent: true,
      },
      {
        source: "/app/admin",
        destination: useAuth.getState().auth
          ? "/app/admin/cars"
          : "/app/admin/auth",
        permanent: true,
      },
      {
        source: "/app/admin/cars",
        destination: useAuth.getState().auth
          ? "/app/admin/cars"
          : "/app/admin/auth",
        permanent: true,
      },
      {
        source: "/app/admin/cars/:path*",
        destination: useAuth.getState().auth
          ? "/app/admin/cars/:path*"
          : "/app/admin/auth",
        permanent: true,
      },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
