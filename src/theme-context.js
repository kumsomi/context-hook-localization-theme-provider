import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({ isDark: false });

const ThemeProvider = ({ children }) => {
  const [fontColor, setFontColor] = useState("");
  const [background, setBackground] = useState("");
  const [theme, setTheme] = useState("");
  const [isDark, setIsDark] = useState(true);

  const ThemeHandler = () => {
    setIsDark(() => !isDark);
    if (isDark) {
      setFontColor(() => "white");
      setBackground(() => "black");
    }
    if (!isDark) {
      setFontColor(() => "black");
      setBackground(() => "white");
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        fontColor,
        setFontColor,
        background,
        setBackground,
        theme,
        setTheme,
        isDark,
        setIsDark,
        ThemeHandler
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export { ThemeProvider, useTheme };
