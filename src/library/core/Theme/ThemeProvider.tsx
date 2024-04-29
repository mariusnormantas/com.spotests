/** @format */

import React from "react";
import { ThemeProvider as DefaultThemeProvider } from "styled-components";
import { tokens } from "./tokens";
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProviderProps } from "./types";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <DefaultThemeProvider theme={tokens}>
      <GlobalStyles />
      {children}
    </DefaultThemeProvider>
  );
};
