import React from 'react';
import { LocationProvider } from '@reach/router';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootRouter } from 'App/components/RootRouter';
import { reachHistory, colorThemeSelector } from 'App/state/rootSelectors';
import { store } from 'App/state/createStore';
import { Header } from 'Header/components/Header';
import { constructTheme } from 'styles/theme';
import { GlobalStyle } from 'styles/GobalStyle';

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
