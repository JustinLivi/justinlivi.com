import React from 'react';
import { LocationProvider } from '@reach/router';
import { Provider, useSelector } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { RootRouter } from 'App/components/RootRouter';
import { reachHistory, colorThemeSelector } from 'App/state/rootSelectors';
import { store } from 'App/state/createStore';
import { Header } from 'Header/components/Header';
import { constructTheme } from 'styles/theme';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { interactiveStyle } from 'styles/interactive';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    background-color: ${color(ColorToken.secondary)};
    margin: 0;
    padding: 0;
    font-size: 88%;
    height: 100%;
    color: ${color(ColorToken.primary)};
  }

  button {
    font-family: 'Poppins', sans-serif;
  }

  a {
    text-decoration: none;
    padding-bottom: 0.25rem;
    color: ${color(ColorToken.primary)};
    ${interactiveStyle}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;

const ThemeRoot = () => {
  const colorTheme = useSelector(colorThemeSelector);
  const theme = constructTheme({ colorTheme });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <RootRouter />
    </ThemeProvider>
  );
};

export const App = () => (
  <Provider store={store}>
    <LocationProvider history={reachHistory}>
      <ThemeRoot />
    </LocationProvider>
  </Provider>
);
