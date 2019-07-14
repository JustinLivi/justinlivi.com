import { routerReducer } from 'features/App/reducers/appRouterReducer';
import { combineReducers } from 'redux';

export const appRootReducer = combineReducers({
  pages: () => ({}),
  router: routerReducer
});
