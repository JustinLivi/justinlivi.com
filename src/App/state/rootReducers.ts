import { combineReducers } from 'redux';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { on, reducer } from 'ts-action';

import { headerStateReducer } from 'Header/state/headerReducers';
import { packageStateReducer } from 'RootPages/reducers/packages';
import { ColorThemeId } from 'styles/colorThemes/colorThemeTypes';
import { toggleColorTheme } from 'App/state/actions';

export const themeReducer = reducer(
  ColorThemeId.light,
  on(toggleColorTheme, theme => +!theme),
);

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