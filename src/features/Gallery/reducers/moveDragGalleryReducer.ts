import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { MOVE_DRAG, MoveDragAction } from '../actions/moveDrag';
import { GalleryState, normalizePercent } from '../galleryState';

export const moveDragGalleryReducer = createKeyableReducer<
  GalleryState,
  MoveDragAction
>(MOVE_DRAG, (state, { payload: { clientX } }) =>
  immer(state, draft => {
    const { dragging, startX, handlerWidth } = state;
    if (!dragging) return;
    const _percent = (startX - clientX) / handlerWidth;
    draft.percent = normalizePercent(_percent);
  })
);
