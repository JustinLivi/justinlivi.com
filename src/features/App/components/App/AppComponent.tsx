import './main.scss';

import { LocationProvider } from '@reach/router';
import { reachHistory } from 'features/App/selectors/routerSelector';
import { store } from 'features/App/store/createStore';
import { HeaderComponent } from 'features/Header/components/Header/HeaderComponent';
import { PagesComponent } from 'features/Pages/components/Pages/PagesComponent';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export const AppComponent = () => (
  <BrowserRouter>
    <Provider store={store}>
      <LocationProvider history={reachHistory}>
        <HeaderComponent />
        <PagesComponent />
      </LocationProvider>
    </Provider>
  </BrowserRouter>
);
