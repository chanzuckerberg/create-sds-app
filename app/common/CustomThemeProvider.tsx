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
import { ThemeMode, ThemeContext } from "../context/themeContext.context";

// CustomThemeProvider component to wrap your app
export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const [theme, setTheme] = useState<Theme>();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    console.log(mediaQuery);

    // Set initial theme based on system preference
    setThemeMode(mediaQuery.matches ? "dark" : "light");

    const handleThemeChange = (e: MediaQueryListEvent) => {
      console.log("handleThemeChange", e);
      setThemeMode(e.matches ? "dark" : "light");
    };

    // Listen for theme changes
    mediaQuery.addEventListener("change", handleThemeChange);

    // Clean up event listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    console.log("themeMode useEffect", themeMode);
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
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {theme && <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>}
    </ThemeContext.Provider>
  );
};
