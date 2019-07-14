import createHistory from 'history/createBrowserHistory';
import { combineReducers } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';

export const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createHistory(),
  reduxTravelling: true
});

export const reducer = combineReducers({
  pages: () => ({}),
  router: routerReducer
});
