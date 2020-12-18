import { appRootReducer, routerMiddleware } from 'App/state/rootReducers';
import { initialState } from 'App/state/rootState';
import { applyMiddleware, createStore, Middleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export const middleware: Middleware[] = [routerMiddleware, apiMiddleware];

export const store = createStore(appRootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
