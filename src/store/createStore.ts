import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reachify } from 'redux-first-history';
import logger from 'redux-logger';

import { createReduxHistory, reducer, routerMiddleware } from './reducers';
import { initialState } from './stateDefinition';

export const middleware: Middleware[] = [routerMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const history = createReduxHistory(store);

export const reachHistory = reachify(history);
