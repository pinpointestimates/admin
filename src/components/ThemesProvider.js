import { useApolloClient, gql } from '@apollo/client';
import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { BodyBackground } from '../stylings/colors';

const DEFAULT_STATE = {
  lightTheme: false,
  toggleTheme: () => {},
};

const GlobalStyle = createGlobalStyle`
  html,body {
      scroll-behavior: smooth;
      background: ${BodyBackground};
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

const query = gql`
  query Theme {
    theme {
      light
    }
  }
`;
// const GET_COUNTER = gql`
//   query GetTheme {
//     theme @client
//   }
// `;
//TODO store settings
export const ThemesProvider = (props) => {
  const [lightTheme, setLightTheme] = useState(false);
  const client = useApolloClient();
  const data = client.readQuery({ query });

  console.log(data);
  // console.log(data);
  // const {
  //   data: { theme },
  // } = useQuery(GET_COUNTER);
  // console.log(theme);
  // TODO remove these

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
