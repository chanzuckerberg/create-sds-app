"use client";

import {
  SDSLightAppTheme,
  SDSDarkAppTheme,
  makeThemeOptions,
} from "@czi-sds/components";
import { createTheme, CssBaseline, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { customThemeLight, customThemeDark } from "./theme";

export type ThemeMode = "light" | "dark";

const updateTheme = (themeMode: ThemeMode) => {
  const baseTheme = themeMode === "light" ? SDSLightAppTheme : SDSDarkAppTheme;
  const customTheme =
    themeMode === "light" ? customThemeLight : customThemeDark;

  const themeOptions = {
    colors: { ...baseTheme.colors, ...customTheme.colors },
    typography: { ...baseTheme.typography, ...customTheme.typography },
    corners: { ...baseTheme.corners, ...customTheme.corners },
    spacing: { ...baseTheme.spacing, ...customTheme.spacing },
    shadows: { ...baseTheme.shadows, ...customTheme.shadows },
    iconSizes: { ...baseTheme.iconSizes, ...customTheme.iconSizes },
    fontWeights: { ...baseTheme.fontWeights, ...customTheme.fontWeights },
  };

  const appTheme = makeThemeOptions(themeOptions, themeMode);
  return createTheme(appTheme, {
    cssVariables: true,
  });
};

// CustomThemeProvider component to wrap your app
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = updateTheme(prefersDarkMode ? "dark" : "light");

  if (!theme) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
