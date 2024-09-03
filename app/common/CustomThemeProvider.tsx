"use client";
import {
  SDSLightAppTheme,
  SDSDarkAppTheme,
  makeThemeOptions,
} from "@czi-sds/components";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from "@mui/material";
import { ReactNode, useState, useEffect } from "react";
import { customTheme, primaryColors } from "./theme";

export type ThemeMode = "light" | "dark";

// CustomThemeProvider component to wrap your app
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();

  const updateTheme = (themeMode: ThemeMode) => {
    const baseTheme =
      themeMode === "light" ? SDSLightAppTheme : SDSDarkAppTheme;
    const themeOptions = { ...baseTheme, ...customTheme };
    themeOptions.colors.blue = primaryColors;
    themeOptions.colors.gray = {
      ...themeOptions.colors.gray,
      "400": "#999999",
    };

    const appTheme = makeThemeOptions(themeOptions, themeMode);
    setTheme(createTheme(appTheme));
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme based on system preference
    updateTheme(mediaQuery.matches ? "dark" : "light");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      updateTheme(e.matches ? "dark" : "light");
    };

    // Listen for theme changes
    mediaQuery.addEventListener("change", handleThemeChange);

    // Clean up event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  if (!theme) {
    return null;
  }
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
