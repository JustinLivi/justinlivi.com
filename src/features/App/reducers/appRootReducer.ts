import { routerReducer } from 'features/App/reducers/appRouterReducer';
import { headerStateReducer } from 'features/Header/reducers/headerStateReducer';
import { combineReducers } from 'redux';

export const appRootReducer = combineReducers({
  pages: () => ({}),
  router: routerReducer,
  headerExpanded: headerStateReducer
});
