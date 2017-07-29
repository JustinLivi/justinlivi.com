/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
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
                <PageLayout>
                    <Gallery>
                        <Card />
                    </Gallery>
                </PageLayout>
            </Provider>
        );
    }
}

export default App;
