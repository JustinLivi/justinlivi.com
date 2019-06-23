import { merge } from 'lodash';

import { RECEIVE_PACKAGES, REQUEST_PACKAGES } from '../components/Pages/OpenSource/reducers';

export interface NpmPackage {
  package: {
    name: string;
    links: {
      repository: string;
      npm: string;
    };
  };
}

export interface OpenSourceState {
  packages: NpmPackage[];
  isFetching: boolean;
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_PACKAGES]: (state: OpenSourceState) =>
    merge({}, state, { isFetching: true }),
  [RECEIVE_PACKAGES]: (state: OpenSourceState, { packages }) =>
    merge({}, state, {
      isFetching: false,
      packages
    })
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  packages: [],
  isFetching: false
};
export default function openSourceReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
