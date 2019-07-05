import './styles/main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from './features/Header/components/Header/HeaderComponent';
import { store } from './store/createStore';

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <HeaderComponent title='test' />
      </div>
    </Provider>
  </BrowserRouter>
);
