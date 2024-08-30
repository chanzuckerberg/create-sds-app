import { createContext, useContext } from "react";

export type ThemeMode = "light" | "dark";

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
};

// Create the context with default values
export const ThemeContext = createContext({
  themeMode: "light",
  setThemeMode: () => {},
} as ThemeContextType);

// Custom hook to use the ThemeContext
export function useThemeContext() {
  return useContext(ThemeContext);
}
