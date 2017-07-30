/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import { Gallery, CardDisplay } from '../components/Gallery';

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
                    <PageLayout>
                        <Gallery
                            routes={[
                                'route1',
                                'route2',
                                'route3',
                                'route4',
                            ]}
                        >
                            <Card>
                                <Route path='/route1/' render={() => <div>Item 1</div>} />
                                <Route path='/route2/' render={() => <div>Item 2</div>} />
                                <Route path='/route3/' render={() => <div>Item 3</div>} />
                                <Route path='/route4/' render={() => <div>Item 4</div>} />
                            </Card>
                        </Gallery>
                    </PageLayout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
