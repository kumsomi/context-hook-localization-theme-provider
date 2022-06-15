import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./cart-context";
import { LocalizeProvider } from "./localize-context";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <LocalizeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </LocalizeProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
