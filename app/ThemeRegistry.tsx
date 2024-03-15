"use client";

import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { theme } from "@/app/common/theme";

interface Props {
  children: React.ReactNode;
}

export default function ThemeRegistry(props: Props) {
  const { children } = props;

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
