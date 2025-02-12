import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router.tsx";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./contexts/CartProvider.tsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
