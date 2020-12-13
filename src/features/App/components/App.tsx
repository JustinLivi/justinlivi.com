import React from 'react';
import { LocationProvider } from '@reach/router';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootRouter } from 'features/App/components/RootRouter';
import { reachHistory, colorThemeSelector } from 'features/App/state/rootSelectors';
import { store } from 'features/App/state/createStore';
import { Header } from 'features/Header/components/Header';
import { constructTheme } from 'features/styles/theme';

const ThemeRoot = () => {
  const colorTheme = useSelector(colorThemeSelector);
  const theme = constructTheme({ colorTheme });
  return (
    <ThemeProvider theme={theme}>
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
