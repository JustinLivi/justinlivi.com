import { LocationProvider } from '@reach/router';
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { RootRouter } from 'features/App/components/RootRouterComponent';
import { reachHistory } from 'features/App/selectors/routerSelector';
import { store } from 'features/App/store/createStore';
import { Header } from 'features/Header/components/Header/HeaderComponent';
import { colorThemeSelector } from 'features/App/selectors/themeSelectors';
import { constructTheme } from 'features/styles/theme';
import { ThemeProvider } from 'styled-components';

const ThemeRoot = () => {
  const colorTheme = useSelector(colorThemeSelector);
  const theme = constructTheme({ colorTheme });
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <RootRouter />
    </ThemeProvider>
  )
}

export const App = () => (
  <Provider store={store}>
    <LocationProvider history={reachHistory}>
      <ThemeRoot />
    </LocationProvider>
  </Provider>
);
