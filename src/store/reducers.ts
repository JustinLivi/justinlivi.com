import { combineReducers } from 'redux';

import { cardStandardRootReducer } from '../components/Gallery/Card/CardReducers';
import { OpenSourceReducers } from '../components/Pages/OpenSource';
import { gallery } from './gallery';

export const reducer = combineReducers({
  gallery,
  card: cardStandardRootReducer,
  packages: OpenSourceReducers
});
