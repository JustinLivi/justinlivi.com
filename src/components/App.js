/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { SwipeHandler, CardDisplay, Pip, PipGroup } from '../components/Gallery';
import Nav from './Nav';
import pages from './Pages/';
import { routes } from './routes';

const { Card } = CardDisplay;

class App extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter>
                    <PageLayout
                        nav={<Nav />}
                        main={(
                            <SwipeHandler
                                location={location}
                                routes={routes}
                            >
                                <Card>
                                    <Switch>{
                                        routes.map( route => (
                                            <Route key={route} path={`/${route}/`} render={pages( route )} />
                                        ))
                                    }</Switch>
                                </Card>
                                <PipGroup>{
                                    routes.map( route => (
                                        <Pip key={route} link={`/${route}/`} />
                                    ))
                                }</PipGroup>
                            </SwipeHandler>
                        )}
                    />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
