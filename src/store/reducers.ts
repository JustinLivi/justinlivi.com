import { combineReducers } from 'redux';

import { CardDisplay, GalleryReducers } from '../components/Gallery';
import { OpenSourceReducers } from '../components/Pages/OpenSource';

const { CardReducers } = CardDisplay;

export const reducer = combineReducers({
  gallery: GalleryReducers,
  card: CardReducers,
  packages: OpenSourceReducers
});
