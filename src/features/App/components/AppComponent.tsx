import { LocationProvider } from '@reach/router';
import React from 'react';
import { Provider } from 'react-redux';

import { RootRouter } from 'features/App/components/RootRouterComponent';
import { reachHistory } from 'features/App/selectors/routerSelector';
import { store } from 'features/App/store/createStore';
import { Header } from 'features/Header/components/Header/HeaderComponent';

export const App = () => (
  <> 
    <Provider store={store}>
      <LocationProvider history={reachHistory}>
        <Header />
        <RootRouter />
      </LocationProvider>
    </Provider>
  </>
);
