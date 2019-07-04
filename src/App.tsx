import './styles/main.scss';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { HeaderComponent } from './features/App/components/Header/HeaderComponent';
import { PageLayoutComponent } from './features/App/components/PageLayout/PageLayoutComponent';
import { SwipeHandlerContainer } from './features/Gallery/components/SwipeHandler/SwipeHandlerContainer';
import { routes } from './features/Pages/routes';
import { store } from './store/createStore';

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PageLayoutComponent
        nav={<HeaderComponent />}
        main={<SwipeHandlerContainer location={location} routes={routes} />}
      />
    </Provider>
  </BrowserRouter>
);
