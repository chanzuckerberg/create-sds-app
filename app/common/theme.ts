"use client";

/**
 * (thuang): Custom theme configuration for the app.
 *
 * (masoudmanson): This file defines custom theme tokens for SDS components and allows you to create
 * custom themes for light and dark modes. It includes all possible customizations
 * available in the SDS theme.
 *
 * Feel free to remove any part of the theme customizations if you prefer to use the
 * SDS default theme. For example, if you only want to modify colors, you can remove
 * the rest of the customizations, and the custom theme should look like this:
 *
 * export const customThemeLight = {
 *   colors: SDSLightThemeColors,
 * };
 *
 * export const customThemeDark = {
 *   colors: SDSDarkThemeColors,
 * };
 */

import {
  Colors,
  CommonThemeProps,
  getColors,
  getCorners,
  getFontWeights,
  getPalette,
  getShadows,
  getSpaces,
} from "@czi-sds/components";

import { Inter, IBM_Plex_Mono } from "next/font/google";

export const INTER_FONT_CSS_VARIABLE = "--font-inter";

/**
 * (thuang): We should only load the font once in the app.
 * If loading a variable font, you don't need to specify the font weight
 * `Inter` is a variable font
 */
export const inter = Inter({
  subsets: ["latin"],
  /**
   * (thuang): We can't use the font-weight variable here, according to Next.js warning
   * CSS variable here is used in CSS files
   */
  variable: "--font-inter",
});

/**
 * (masoudmanson): IMB_Plex_Mono is needed for SDS code blocks.
 */
export const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "600"],
});

// fontWeights are shared between light and dark themes
const fontWeights = {
  bold: 700,
  light: 300,
  medium: 500,
  regular: 400,
  semibold: 600,
};

/**
 * Custom icon sizes
 */
const iconSizes = {
  input: { height: 16, width: 16 }, // for use with input icons only (radio and checkbox)
  l: { height: 24, width: 24 },
  m: { height: 16, width: 16 },
  s: { height: 16, width: 16 },
  xl: { height: 32, width: 32 },
  xs: { height: 12, width: 12 },
};

/**
 * Custom spacing
 */
const spacing = {
  default: 8,
  l: 16,
  m: 12,
  s: 8,
  xl: 24,
  xs: 6,
  xxl: 40,
  xxs: 4,
  xxxs: 2,
};

/**
 * Custom corners
 */
const corners = {
  l: 16,
  m: 4,
  none: 0,
  s: 2,
};

/**
 * (masoudmanson): SDS has introduced new font styles for tabular numbers.
 */
const tabularNums = "tabular-nums";

/**
 * Custom typography
 * wideStyles are used for wide screens
 * narrowStyles are used for mobile screens
 */
const typography = {
  fontFamily: {
    body: inter.style.fontFamily,
    caps: inter.style.fontFamily,
    code: ibm_plex_mono.style.fontFamily,
    header: inter.style.fontFamily,
    tabular: inter.style.fontFamily,
  },
  wideStyles: {
    body: {
      regular: {
        button: {
          fontSize: 14,
          fontWeight: fontWeights.medium,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
        l: {
          fontSize: 18,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.08px",
          lineHeight: "20px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.04px",
          lineHeight: "20px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.05px",
          lineHeight: "16px",
        },
      },
      semibold: {
        button: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
        l: {
          fontSize: 18,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.08px",
          lineHeight: "20px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.04px",
          lineHeight: "20px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.05px",
          lineHeight: "16px",
        },
      },
    },
    caps: {
      semibold: {
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0.36px",
          lineHeight: "16px",
          textTransform: "uppercase" as const,
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0.33px",
          lineHeight: "16px",
          textTransform: "uppercase" as const,
        },
        xxxxs: {
          fontSize: 10,
          fontWeight: fontWeights.semibold,
          letterSpacing: "1.0px",
          lineHeight: "12px",
          textTransform: "uppercase" as const,
        },
      },
    },
    code: {
      regular: {
        s: {
          fontSize: 14,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
      semibold: {
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
    },
    header: {
      semibold: {
        l: {
          fontSize: 18,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.31px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.18px",
          lineHeight: "20px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.1px",
          lineHeight: "20px",
        },
        xl: {
          fontSize: 24,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.37px",
          lineHeight: "32px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxl: {
          fontSize: 32,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.56px",
          lineHeight: "36px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
      },
    },
    tabular: {
      regular: {
        s: {
          fontSize: 14,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
      semibold: {
        s: {
          fontSize: 14,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
    },
  },
  narrowStyles: {
    body: {
      regular: {
        button: {
          fontSize: 14,
          fontWeight: fontWeights.medium,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
        l: {
          fontSize: 18,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.08px",
          lineHeight: "20px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.04px",
          lineHeight: "20px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.regular,
          letterSpacing: "-0.05px",
          lineHeight: "16px",
        },
      },
      semibold: {
        button: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
        l: {
          fontSize: 18,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.08px",
          lineHeight: "20px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.04px",
          lineHeight: "20px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.05px",
          lineHeight: "16px",
        },
      },
    },
    caps: {
      semibold: {
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0.36px",
          lineHeight: "16px",
          textTransform: "uppercase" as const,
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0.33px",
          lineHeight: "16px",
          textTransform: "uppercase" as const,
        },
        xxxxs: {
          fontSize: 10,
          fontWeight: fontWeights.semibold,
          letterSpacing: "1.0px",
          lineHeight: "12px",
          textTransform: "uppercase" as const,
        },
      },
    },
    code: {
      regular: {
        s: {
          fontSize: 14,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
      semibold: {
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
    },
    header: {
      semibold: {
        l: {
          fontSize: 18,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.31px",
          lineHeight: "24px",
        },
        m: {
          fontSize: 16,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.18px",
          lineHeight: "20px",
        },
        s: {
          fontSize: 14,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.1px",
          lineHeight: "20px",
        },
        xl: {
          fontSize: 24,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.37px",
          lineHeight: "32px",
        },
        xs: {
          fontSize: 13,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxl: {
          fontSize: 32,
          fontWeight: fontWeights.semibold,
          letterSpacing: "-0.56px",
          lineHeight: "36px",
        },
        xxs: {
          fontSize: 12,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
        xxxs: {
          fontSize: 11,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "16px",
        },
      },
    },
    tabular: {
      regular: {
        s: {
          fontSize: 14,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.regular,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
      semibold: {
        s: {
          fontSize: 14,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "24px",
          textTransform: "none" as const,
        },
        xs: {
          fontSize: 13,
          fontVariantNumeric: tabularNums,
          fontWeight: fontWeights.semibold,
          letterSpacing: "0px",
          lineHeight: "20px",
          textTransform: "none" as const,
        },
      },
    },
  },
};

/**
 * Custom shadows
 */

const shadows = {
  l: "0 2px 12px 0 rgba(0,0,0, 0.3)",
  m: "0 2px 4px 0 rgba(0,0,0, 0.15), 0 2px 10px 0 rgba(0,0,0, 0.15)",
  s: "0 2px 4px 0 rgba(0,0,0, 0.25)",
};

/**
 * Custom colors for light theme
 */
const SDSLightThemeColors: Colors = {
  blue: {
    "100": "#e2eeff",
    "200": "#cce1ff",
    "300": "#9dc6ff",
    "400": "#6ca6ff",
    "500": "#1a6cef",
    "600": "#0041b9",
    "700": "#002d90",
    "800": "#00114a",
  },
  gray: {
    "100": "#f3f3f3",
    "200": "#dfdfdf",
    "300": "#c3c3c3",
    "400": "#a5a5a5",
    "50": "#ffffff",
    "500": "#969696",
    "600": "#6c6c6c",
    "700": "#3b3b3b",
    "75": "#fafafa",
    "800": "#1b1b1b",
    "900": "#000000",
  },
  green: {
    "100": "#daf4de",
    "200": "#b9ecc3",
    "300": "#7fd693",
    "400": "#50b96d",
    "500": "#238444",
    "600": "#105b2b",
    "700": "#07431d",
    "800": "#001f00",
  },
  purple: {
    "100": "#efeafe",
    "200": "#e4dbfc",
    "300": "#cbbaF8",
    "400": "#b296f2",
    "500": "#8b54e2",
    "600": "#6526b5",
    "700": "#490092",
    "800": "#26004c",
  },
  red: {
    "100": "#ffe8e6",
    "200": "#ffd6d2",
    "300": "#ffafa8",
    "400": "#ff7e78",
    "500": "#db2131",
    "600": "#980017",
    "700": "#6f0008",
    "800": "#340000",
  },
  yellow: {
    "100": "#fff3db",
    "200": "#ffdb97",
    "300": "#ffca5c",
    "400": "#fab700",
    "500": "#da9900",
    "600": "#b07300",
    "700": "#7c3e00",
    "800": "#541700",
  },
};

/**
 * Custom colors for dark theme
 */
const SDSDarkThemeColors: Colors = {
  blue: {
    "100": "#0f1d4a",
    "200": "#0a216e",
    "300": "#0647b8",
    "400": "#2573f4",
    "500": "#5b9aff",
    "600": "#a2c9ff",
    "700": "#cde3ff",
    "800": "#e2eeff",
  },
  gray: {
    "100": "#333333",
    "200": "#494949",
    "300": "#696969",
    "400": "#9b9b9b",
    "50": "#000000",
    "500": "#aaaaaa",
    "600": "#cdcdcd",
    "700": "#ededed",
    "75": "#101010",
    "800": "#fafafa",
    "900": "#ffffff",
  },
  green: {
    "100": "#082608",
    "200": "#063617",
    "300": "#10632e",
    "400": "#278b48",
    "500": "#4bae68",
    "600": "#85d898",
    "700": "#bcecc5",
    "800": "#daf4de",
  },
  purple: {
    "100": "#331252",
    "200": "#410f70",
    "300": "#6429b2",
    "400": "#905de6",
    "500": "#aa89ef",
    "600": "#cebef8",
    "700": "#e4dcfc",
    "800": "#f0ebfe",
  },
  red: {
    "100": "#330603",
    "200": "#660a12",
    "300": "#9e1c1c",
    "400": "#c73028",
    "500": "#e05043",
    "600": "#ff988a",
    "700": "#ffbdb3",
    "800": "#ffd8d1",
  },
  yellow: {
    "100": "#361b07",
    "200": "#52270a",
    "300": "#965a0b",
    "400": "#bd8804",
    "500": "#d9a943",
    "600": "#e5bc63",
    "700": "#f5d789",
    "800": "#ffe6a8",
  },
};

/**
 * Custom theme for light and dark themes
 */
const sharedCustomTheme = {
  corners,
  iconSizes,
  spacing,
  typography,
  shadows,
  fontWeights,
};

export const customThemeLight = {
  colors: SDSLightThemeColors,
  ...sharedCustomTheme,
};

export const customThemeDark = {
  colors: SDSDarkThemeColors,
  ...sharedCustomTheme,
};

/**
 * You can export custom tokens from the theme file to simplify their use in your application.
 */

// Spacing tokens

export const spacesXxl = (props: CommonThemeProps) => getSpaces(props)?.xxl;
export const spacesXl = (props: CommonThemeProps) => getSpaces(props)?.xl;
export const spacesL = (props: CommonThemeProps) => getSpaces(props)?.l;
export const spacesM = (props: CommonThemeProps) => getSpaces(props)?.m;
export const spacesS = (props: CommonThemeProps) => getSpaces(props)?.s;
export const spacesXs = (props: CommonThemeProps) => getSpaces(props)?.xs;
export const spacesXxs = (props: CommonThemeProps) => getSpaces(props)?.xxs;
export const spacesXxxs = (props: CommonThemeProps) => getSpaces(props)?.xxxs;
export const spacesDefault = (props: CommonThemeProps) =>
  getSpaces(props)?.default;

// Colors tokens

export const textPrimary = (props: CommonThemeProps) =>
  getPalette(props)?.text?.primary;

export const textSecondary = (props: CommonThemeProps) =>
  getPalette(props)?.text?.secondary;

export const primary100 = (props: CommonThemeProps) =>
  getColors(props)?.blue[100];

export const primary200 = (props: CommonThemeProps) =>
  getColors(props)?.blue[200];

export const primary300 = (props: CommonThemeProps) =>
  getColors(props)?.blue[300];

export const primary400 = (props: CommonThemeProps) =>
  getColors(props)?.blue[400];

export const primary500 = (props: CommonThemeProps) =>
  getColors(props)?.blue[500];

export const primary600 = (props: CommonThemeProps) =>
  getColors(props)?.blue[600];

export const success100 = (props: CommonThemeProps) =>
  getColors(props)?.green[100];

export const success400 = (props: CommonThemeProps) =>
  getColors(props)?.green[400];

export const success500 = (props: CommonThemeProps) =>
  getColors(props)?.green[500];

export const success600 = (props: CommonThemeProps) =>
  getColors(props)?.green[600];

export const warning100 = (props: CommonThemeProps) =>
  getColors(props)?.yellow[100];

export const warning400 = (props: CommonThemeProps) =>
  getColors(props)?.yellow[400];

export const warning500 = (props: CommonThemeProps) =>
  getColors(props)?.yellow[500];

export const error100 = (props: CommonThemeProps) => getColors(props)?.red[100];

export const error400 = (props: CommonThemeProps) => getColors(props)?.red[400];

export const error500 = (props: CommonThemeProps) => getColors(props)?.red[500];

export const grey100 = (props: CommonThemeProps) => getColors(props)?.gray[100];
export const gray100 = grey100;

export const grey200 = (props: CommonThemeProps) => getColors(props)?.gray[200];
export const gray200 = grey200;

export const grey300 = (props: CommonThemeProps) => getColors(props)?.gray[300];
export const gray300 = grey300;

export const grey400 = (props: CommonThemeProps) => getColors(props)?.gray[400];
export const gray400 = grey400;

export const grey500 = (props: CommonThemeProps) => getColors(props)?.gray[500];
export const gray500 = grey500;

export const grey600 = (props: CommonThemeProps) => getColors(props)?.gray[600];
export const gray600 = grey600;

export const greyWhite = () => "#ffffff";
export const grayWhite = greyWhite;

export const beta100 = (props: CommonThemeProps) =>
  getColors(props)?.purple[100];

export const beta400 = (props: CommonThemeProps) =>
  getColors(props)?.purple[400];

export const beta600 = (props: CommonThemeProps) =>
  getColors(props)?.purple[600];

export const OFF_WHITE = "#f8f8f8";

export const PINK = "#E9429A";

// Font Weight tokens
export const fontWeightBold = (props: CommonThemeProps) =>
  getFontWeights(props)?.bold;

export const fontWeightLight = (props: CommonThemeProps) =>
  getFontWeights(props)?.light;

export const fontWeightMedium = (props: CommonThemeProps) =>
  getFontWeights(props)?.medium;

export const fontWeightRegular = (props: CommonThemeProps) =>
  getFontWeights(props)?.regular;

export const fontWeightSemibold = (props: CommonThemeProps) =>
  getFontWeights(props)?.semibold;

// Shadow tokens

export const shadowL = (props: CommonThemeProps) => getShadows(props)?.l;
export const shadowM = (props: CommonThemeProps) => getShadows(props)?.m;
export const shadowS = (props: CommonThemeProps) => getShadows(props)?.s;

// Corner tokens

export const cornersL = (props: CommonThemeProps) => getCorners(props)?.l;
export const cornersM = (props: CommonThemeProps) => getCorners(props)?.m;
export const cornersS = (props: CommonThemeProps) => getCorners(props)?.s;
export const cornersNone = (props: CommonThemeProps) => getCorners(props)?.none;
