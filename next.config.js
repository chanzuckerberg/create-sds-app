/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: {
      autoLabel: "never",
      sourceMap: false,
    },
  },
};

module.exports = nextConfig;
