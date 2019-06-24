import { applyMiddleware, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

import { reducer } from './reducers';
import { initialState } from './stateDefinition';

export const middleware: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
