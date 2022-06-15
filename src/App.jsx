import "./styles.css";
import { Cart } from "./Cart";
import { ProductListing } from "./ProductListing";

import { Theme } from "./Theme";
import { useTheme } from "./theme-context";
import { Localization } from "./Localization";

export default function App() {
  const { fontColor, background } = useTheme();
  return (
    <div style={{ color: fontColor, backgroundColor: background }}>
      <h1 className="app-header">eCommerce</h1>
      <div className="app-body">
        <Theme />
        <Localization />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
