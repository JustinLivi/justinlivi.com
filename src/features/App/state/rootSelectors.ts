import { reachify } from 'redux-first-history';

import { createReduxHistory } from 'features/App/state/rootReducers';
import { store } from 'features/App/state/createStore';
import { State } from 'features/App/state/rootState';

export const colorThemeSelector = (state: State) => state.colorTheme;

export const history = createReduxHistory(store);

export const reachHistory = reachify(history);
