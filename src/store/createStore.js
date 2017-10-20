import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStore = ( initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [
        thunk,
    ];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];
    let composeEnhancers = compose;

    if ( __DEV__ ) {
        if ( typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' ) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createReduxStore(
        reducers(),
        initialState,
        composeEnhancers(
            applyMiddleware( ...middleware ),
            ...enhancers
        )
    );
    store.asyncReducers = {};

    if ( module.hot ) {
        module.hot.accept( './reducers', () => {
            const hotReducers = require( './reducers' ).default; // eslint-disable-line global-require
            store.replaceReducer( hotReducers( store.asyncReducers ));
        });
    }

    return store;
};

export default createStore;
