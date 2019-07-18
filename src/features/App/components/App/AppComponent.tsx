import './main.scss';

import { LocationProvider } from '@reach/router';
import { reachHistory } from 'features/App/selectors/routerSelector';
import { store } from 'features/App/store/createStore';
import { Header } from 'features/Header/components/Header/HeaderComponent';
import { Pages } from 'features/Pages/components/Pages/PagesComponent';
import React from 'react';
import { Provider } from 'react-redux';

export const App = () => (
  <Provider store={store}>
    <LocationProvider history={reachHistory}>
      <Header />
      <Pages />
    </LocationProvider>
  </Provider>
);
