import { createContext, useContext, useState } from "react";

const LocalizeContext = createContext({ langugage: "english" });

const LocalizeProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const languageLib = {
    english: {
      dark: "dark",
      light: "light",
      mode: "mode",
      cart: "items in cart",
      product: "product",
      cartbtn: "Add to cart"
    },
    hindi: {
      light: "हल्के",
      dark: "गहरे",
      mode: "रंग में",
      cart: "आपकी झोली में चीज़े",
      product: " उत्पाद",
      cartbtn: "झोली में डाले"
    }
  };

  const HindiLangHandler = () => {
    console.log("hindi");
    setLanguage(() => "hindi");
  };
  const EnglishLangHandler = () => {
    console.log("english");
    setLanguage(() => "english");
  };

  return (
    <LocalizeContext.Provider
      value={{ language, languageLib, HindiLangHandler, EnglishLangHandler }}
    >
      {children}
    </LocalizeContext.Provider>
  );
};
const useLocalization = () => useContext(LocalizeContext);
export { LocalizeProvider, useLocalization };
