/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const sds = require("@czi-sds/components/dist/tailwind.json");

module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,scss,md}",
    "./*.tsx",
    "./app/**/*.module.css",
    "./website-docs/**/*.mdx",
  ],
  theme: {
    extend: {
      ...sds,
      fontWeight: {
        "sds-regular": "400",
        "sds-semibold": "600",
      },

      screens: {
        "screen-760": "760px",
        "screen-1024": "1024px",
        "screen-2040": "2040px",
      },

      maxWidth: {
        content: "1600px",
        "content-small": "800px",
      },

      // overwrite default SDS line heights
      lineHeight: {
        // header
        "sds-header-xxl": "34px",
        "sds-header-xl": "30px",
        "sds-header-l": "24px",
        "sds-header-m": "22px",
        "sds-header-s": "20px",
        "sds-header-xs": "18px",
        "sds-header-xxs": "18px",
        "sds-header-xxxs": "16px",
        // body
        "sds-body-l": "28px",
        "sds-body-m": "26px",
        "sds-body-s": "24px",
        "sds-body-xs": "20px",
        "sds-body-xxs": "18px",
        "sds-body-xxxs": "16px",
        // caps
        "sds-caps-xxs": "18px",
        "sds-caps-xxxs": "16px",
        "sds-caps-xxxxs": "14px",
      },

      dropShadow: {
        "landing-header": "0 0 7px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
