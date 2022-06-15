import { useCart } from "./cart-context";
import { useLocalization } from "./localize-context";

export function ProductListing() {
  const { addToCart } = useCart();
  const { language, languageLib } = useLocalization();
  return ["1", "2", "3", "4"].map((item) => (
    <div key={item}>
      <h2>
        {`${languageLib[language]["product"]}`} {item}
      </h2>
      <button
        onClick={addToCart}
      >{`${languageLib[language]["cartbtn"]}`}</button>
    </div>
  ));
}
