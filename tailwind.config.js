/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sds = require("@czi-sds/components/dist/tailwind.json");

module.exports = {
  mode: "jit",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx,scss}"],
  theme: {
    extend: sds,
  },
  plugins: [],
};
