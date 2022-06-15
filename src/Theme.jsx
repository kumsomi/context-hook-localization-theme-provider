import { useLocalization } from "./localize-context";
import { useTheme } from "./theme-context";

export const Theme = () => {
  const { ThemeHandler, isDark } = useTheme();
  const { language, languageLib } = useLocalization();
  return (
    <div>
      <button onClick={ThemeHandler}>
        {`${
          isDark
            ? languageLib[language]["dark"]
            : languageLib[language]["light"]
        } ${languageLib[language]["mode"]}`}
      </button>
    </div>
  );
};
