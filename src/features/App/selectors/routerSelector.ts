import { createReduxHistory } from 'features/App/reducers/appRouterReducer';
import { store } from 'features/App/store/createStore';
import { reachify } from 'redux-first-history';

export const history = createReduxHistory(store);

export const reachHistory = reachify(history);
