import { routerReducer } from 'features/App/reducers/appRouterReducer';
import { headerStateReducer } from 'features/Header/reducers/headerStateReducer';
import { packageStateReducer } from 'features/Pages/reducers/packages';
import { combineReducers } from 'redux';

export const appRootReducer = combineReducers({
  pages: () => ({}),
  router: routerReducer,
  headerExpanded: headerStateReducer,
  packages: packageStateReducer
});
