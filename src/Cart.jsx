import { useCart } from "./cart-context";
import { useLocalization } from "./localize-context";

export function Cart() {
  const { items } = useCart();
  const { language, languageLib } = useLocalization();
  return <h1 key={items}>{`${languageLib[language]["cart"]} : ${items}`}</h1>;
}
