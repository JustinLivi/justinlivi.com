import { combineReducers } from 'redux';

import { rootGalleryReducer } from '../features/Gallery/rootGalleryReducer';

export const reducer = combineReducers({
  gallery: rootGalleryReducer,
  pages: () => ({})
});
