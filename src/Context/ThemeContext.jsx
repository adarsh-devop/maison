import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

const [nightMode, setNightMode] = useState(false);

const darkmode = () => {
  setNightMode((prev) => !prev);
};

  return (
  <ThemeContext.Provider value={{ nightMode, darkmode  }}>
    {children}
  </ThemeContext.Provider>
);
}

export default ThemeProvider