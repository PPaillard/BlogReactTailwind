import { createContext, useState, useContext } from "react";

const DarkModeContext = createContext();

export default DarkModeContext;

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkModeContext = () => useContext(DarkModeContext);
