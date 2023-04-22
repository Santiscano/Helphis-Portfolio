import { useState, createContext, FC, useEffect } from "react";

const AppContext = createContext({
  darkMode: false,
  language: "de",
  setDarkMode: () => {},
  handleChangeTheme: () => {},
  handleSetLanguage: (lang: string) => {},
});

const AppContextProvider: FC = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("de");

  // On component load set language from LS or set 'de'
  useEffect(() => {
    const lang = localStorage.getItem("lang") || "de";
    setLanguage(lang);
  }, []);

  // Change page theme
  function handleChangeTheme() {
    setDarkMode((current) => !current);
  }

  // Change page language
  function handleSetLanguage(lang: string) {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        language,
        // @ts-ignore
        setDarkMode,
        handleChangeTheme,
        handleSetLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };

export default AppContext;
