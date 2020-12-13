import { appRootReducer, routerMiddleware } from 'features/App/state/rootReducers';
import { initialState } from 'features/App/state/rootState';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const middleware: Middleware[] = [routerMiddleware, apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(appRootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
