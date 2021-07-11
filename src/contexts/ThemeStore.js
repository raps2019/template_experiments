import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const themes = {
  light: {
    navbar: {
      background: "white",
      primary: "#ab87ff",
      secondary: "#fface4",
      text: "black"
    }
  },
  dark: {
    navbar: {
      background: "#212121",
      primary: "#580aff",
      secondary: "#be0aff",
      text: "white"
    }
  },
};

const Theme = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export { ThemeContext, ThemeStore, Theme };
