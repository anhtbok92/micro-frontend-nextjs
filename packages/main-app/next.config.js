const { VENDOR_URL } = process.env;

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["shared"]);
const withImages = require("next-images");
module.exports = withPlugins([withTM(), withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/vendor",
        destination: `${VENDOR_URL}/vendor`,
      },
      {
        source: "/vendor/:path*",
        destination: `${VENDOR_URL}/vendor/:path*`,
      },
    ];
  },
});