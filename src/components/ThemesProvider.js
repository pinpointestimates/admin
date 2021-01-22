import React, { createContext, useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { DarkBackground } from '../stylings/Colors';

const DEFAULT_STATE = {
  lightTheme: false,
  toggleTheme: () => {},
};

const GlobalStyle = createGlobalStyle`
  html,body {
      scroll-behavior: smooth;
      background: ${DarkBackground};
      padding: 0;
      margin: 0;
  }
  input {
    filter: none;
  }
  
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  :-moz-autofill-preview {
    filter: grayscale(21%) brightness(88%) contrast(161%) invert(10%) sepia(40%) saturate(206%);
  }
`;

export const ThemesContext = createContext(DEFAULT_STATE);

export const ThemesProvider = (props) => {
  const [lightTheme, setLightTheme] = useState(false);
  // TODO store in localstorage

  const theme = { light: false };

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <ThemesContext.Provider
      value={{
        lightTheme,
        toggleTheme: toggleTheme,
      }}
    >
      <ThemeProvider theme={{ mode: !!theme.light ? 'light' : 'dark' }}>
        <>
          {props.children}
          <GlobalStyle />
        </>
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};
