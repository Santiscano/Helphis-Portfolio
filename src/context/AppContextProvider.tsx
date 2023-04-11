import { useState, createContext, FC } from "react";

const AppContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
  handleChangeTheme: () => {},
});

const AppContextProvider: FC = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  function handleChangeTheme() {
    setDarkMode((current) => !current);
  }

  return (
    <AppContext.Provider
      value={{
        darkMode,
        // @ts-ignore
        setDarkMode,
        handleChangeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };

export default AppContext;
