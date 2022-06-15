import { useLocalization } from "./localize-context";

export const Localization = () => {
  const { HindiLangHandler, EnglishLangHandler } = useLocalization();
  return (
    <div>
      <button onClick={HindiLangHandler}>Hindi</button>
      <button onClick={EnglishLangHandler}>English</button>
    </div>
  );
};
