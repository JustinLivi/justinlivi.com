import './styles/main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from './features/Header/components/Header/HeaderComponent';
import { PagesComponent } from './features/Pages/components/Pages/PagesComponent';
import { store } from './store/createStore';

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <HeaderComponent />
      <PagesComponent />
    </Provider>
  </BrowserRouter>
);
