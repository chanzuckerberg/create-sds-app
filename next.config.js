/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  transpilePackages: [
    "@czi-sds/components",
    "@czi-sds/data-viz",
  ],
};

module.exports = nextConfig;
