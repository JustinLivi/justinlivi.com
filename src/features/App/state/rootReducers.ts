import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { reducer } from 'ts-action';

import { headerStateReducer } from 'features/Header/state/headerReducers';
import { packageStateReducer } from 'features/RootPages/reducers/packages';
import { ColorThemeId } from 'features/styles/colorThemes/colorThemeTypes';

export const themeReducer = reducer(ColorThemeId.light);

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
  reduxTravelling: true,
});

export const appRootReducer = combineReducers({
  router: routerReducer,
  headerExpanded: headerStateReducer,
  packages: packageStateReducer,
  colorTheme: themeReducer,
});
