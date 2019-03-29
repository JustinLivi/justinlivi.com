import { combineReducers } from 'redux';

import { OpenSourceReducers } from '../components/Pages/OpenSource';
import { card } from './card';
import { gallery } from './gallery';

export const reducer = combineReducers({
  gallery,
  card,
  packages: OpenSourceReducers
});
