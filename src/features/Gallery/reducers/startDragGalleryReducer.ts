import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { START_DRAG, StartDragAction } from '../actions/startDrag';
import { GalleryState } from '../galleryState';

export const startDragGalleryReducer = createKeyableReducer<
  GalleryState,
  StartDragAction
>(START_DRAG, (state, { payload: { startX } }) =>
  immer(state, draft => {
    draft.startX = startX;
    draft.dragging = true;
  })
);
