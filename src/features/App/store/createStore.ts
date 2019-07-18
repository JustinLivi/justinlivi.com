import { appRootReducer } from 'features/App/reducers/appRootReducer';
import { routerMiddleware } from 'features/App/reducers/appRouterReducer';
import { initialState } from 'features/App/store/rootState';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

export const middleware: Middleware[] = [routerMiddleware, apiMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(
  appRootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
