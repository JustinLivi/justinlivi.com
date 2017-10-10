import fetchPonyfill from 'fetch-ponyfill';
import merge from 'lodash.merge';

const { fetch } = fetchPonyfill();

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_PACKAGES = 'REQUEST_PACKAGES';
export const RECEIVE_PACKAGES = 'RECEIVE_PACKAGES';

// ------------------------------------
// Actions
// ------------------------------------
export function requestPackages() {
    return {
        type: REQUEST_PACKAGES,
    };
}

export function receivePackages({ results: packages }) {
    return {
        type: RECEIVE_PACKAGES,
        packages,
    };
}

export function fetchPackages() {
    return ( dispatch ) => {
        dispatch( requestPackages());
        return fetch( 'https://api.npms.io/v2/search?q=maintainer:justinlivi&size=250&from=0' )
        .then( response => response.json())
        .then( json => dispatch( receivePackages( json )));
    };
}

export function fetchPackagesIfNeeded() {
    return ( dispatch, getState ) => {
        const { packages, isFetching } = getState().packages;
        if ( !packages.length && !isFetching ) {
            return dispatch( fetchPackages());
        }
        return undefined;
    };
}

export const actions = {
    requestPackages,
    receivePackages,
    fetchPackages,
    fetchPackagesIfNeeded,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [REQUEST_PACKAGES]: state => merge({}, state, { isFetching: true }),
    [RECEIVE_PACKAGES]: ( state, { packages }) => merge({}, state, {
        isFetching: false,
        packages,
    }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    packages: [],
    isFetching: false,
};
export default function openSourceReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
