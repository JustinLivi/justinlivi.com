import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: true
});
