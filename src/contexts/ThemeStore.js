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

export const themes = {
  light: {
    background1: "#e6dbee", 
    background2: '#fbfaff',
    primary: '#f48668',
    secondary: '#9762e5',
    navbar: {
      background: "white",
      primary: "#fec89a",
      secondary: "#bde0fe",
      text: "black"
    }
  },
  dark: {
    background1: '#212529',
    background2: '#343a40',
    primary: '#ffd18f',
    secondary: '#b371fc',
    navbar: {
      background: "#212121",
      primary: "#fec89a",
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
