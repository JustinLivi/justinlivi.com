import { reachify } from 'redux-first-history';

import { createReduxHistory } from 'App/state/rootReducers';
import { store } from 'App/state/createStore';
import { State } from 'App/state/rootState';

export const colorThemeSelector = (state: State) => state.colorTheme;

export const history = createReduxHistory(store);

export const reachHistory = reachify(history);
