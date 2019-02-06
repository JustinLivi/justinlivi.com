import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageLayout from '../layouts/PageLayout';
import { CardDisplay, Pip, PipGroup, SwipeHandler } from './Gallery';
import Nav from './Nav';
import pages from './Pages';
import { routes } from './routes';

const { Card } = CardDisplay;

export const App = () => (
  <PageLayout
    nav={<Nav />}
    main={
      <SwipeHandler location={location} routes={routes}>
        <Card>
          <Switch>
            {routes.map(route => (
              <Route key={route} path={`/${route}/`} render={pages(route)} />
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
);

export class AppRoute extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={this.props.store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default AppRoute;
