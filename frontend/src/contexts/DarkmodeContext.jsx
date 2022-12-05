import { createContext, useState, useContext, useEffect } from "react";

const DarkModeContext = createContext();

export default DarkModeContext;

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    setDarkMode(!!localStorage.getItem("darkMode"));
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
