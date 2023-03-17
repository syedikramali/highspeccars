/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  suppressHydrationWarning: true,
  images: {
    domains: [
      "static.wixstatic.com",
      "swiperjs.com",
      "silsoeprestigemotors.co.uk",
      "images.pexels.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
