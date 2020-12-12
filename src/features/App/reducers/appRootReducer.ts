import { routerReducer } from 'features/App/reducers/appRouterReducer';
import { themeReducer } from 'features/App/reducers/appThemeReducer';
import { headerStateReducer } from 'features/Header/reducers/headerStateReducer';
import { packageStateReducer } from 'features/RootPages/reducers/packages';
import { combineReducers } from 'redux';

export const appRootReducer = combineReducers({
  router: routerReducer,
  headerExpanded: headerStateReducer,
  packages: packageStateReducer,
  colorTheme: themeReducer,
});
