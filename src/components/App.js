/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { SwipeHandler, CardDisplay } from '../components/Gallery';
import Nav from './Nav';
import Home from './Pages/Home';
import routes from './routes';

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
                                    <Switch>
                                        <Route path='/home/' render={() => <Home />} />
                                        <Route path='/route2/' render={() => <div>Item 2</div>} />
                                        <Route path='/route3/' render={() => <div>Item 3</div>} />
                                        <Route path='/route4/' render={() => <div>Item 4</div>} />
                                    </Switch>
                                </Card>
                            </SwipeHandler>
                        )}
                    />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
