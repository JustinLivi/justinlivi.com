import './styles/main.scss';

import { LocationProvider } from '@reach/router';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from './features/Header/components/Header/HeaderComponent';
import { PagesComponent } from './features/Pages/components/Pages/PagesComponent';
import { reachHistory, store } from './store/createStore';

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <LocationProvider history={reachHistory}>
        <HeaderComponent />
        <PagesComponent />
      </LocationProvider>
    </Provider>
  </BrowserRouter>
);
