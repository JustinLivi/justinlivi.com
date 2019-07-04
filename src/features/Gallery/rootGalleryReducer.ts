import { combineKeyableReducers } from 'redux-keyable';

import { galleryInitialState, GalleryState } from './galleryState';
import { endDragGalleryReducer } from './reducers/endDragGalleryReducer';
import { goToRouteGalleryReducer } from './reducers/goToRouteGalleryReducer';
import { moveDragGalleryReducer } from './reducers/moveDragGalleryReducer';
import { setCardWidthGalleryReducer } from './reducers/setCardWidthGalleryReducer';
import { setHandlerWidthGalleryReducer } from './reducers/setHandlerWidthGalleryReducer';
import { startDragGalleryReducer } from './reducers/startDragGalleryReducer';

export const rootGalleryReducer = combineKeyableReducers<GalleryState>(
  galleryInitialState
)(
  setCardWidthGalleryReducer,
  moveDragGalleryReducer,
  startDragGalleryReducer,
  endDragGalleryReducer,
  goToRouteGalleryReducer,
  setHandlerWidthGalleryReducer
);
