import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootRouter } from 'App/components/RootRouter';
import { colorThemeSelector } from 'App/state/rootSelectors';
import { store } from 'App/state/createStore';
import { constructTheme } from 'styles/theme';
import { GlobalStyle } from 'styles/GobalStyle';

const ThemeRoot = () => {
  const colorTheme = useSelector(colorThemeSelector);
  const theme = constructTheme({ colorTheme });
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootRouter />
    </ThemeProvider>
  );
};

export const App = () => (
  <Provider store={store}>
    <ThemeRoot />
  </Provider>
);
