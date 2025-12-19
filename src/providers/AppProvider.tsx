import { ThemeProvider } from "styled-components";

import { Home } from "@pages/Home";
import { GlobalStyle } from "@styles/GlobalStyle";
import { theme } from "@styles/theme";

import type { FC } from "react";

const AppProviders: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export { AppProviders };
