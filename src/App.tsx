import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CardDisplay, Pip, PipGroup, SwipeHandler } from './components/Gallery';
import Nav from './components/Nav';
import pages from './components/Pages';
import { routes } from './components/routes';
import PageLayout from './layouts/PageLayout';
import { store } from './store/createStore';

const { Card } = CardDisplay;

export const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PageLayout
        nav={<Nav />}
        main={
          <SwipeHandler location={location} routes={routes}>
            <Card>
              <Switch>
                {routes.map(route => (
                  <Route
                    key={route}
                    path={`/${route}/`}
                    render={pages(route)}
                  />
                ))}
              </Switch>
            </Card>
            <PipGroup>
              {routes.map(route => (
                <Pip key={route} link={`/${route}/`} />
              ))}
            </PipGroup>
          </SwipeHandler>
        }
      />
    </Provider>
  </BrowserRouter>
);
