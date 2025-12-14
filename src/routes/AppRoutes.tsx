import { GlobalStyle } from "@styles/GlobalStyle";
import { theme } from "@styles/theme";
import App from "src/App";
import { ThemeProvider } from "styled-components";

export function AppProviders() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  );
}
