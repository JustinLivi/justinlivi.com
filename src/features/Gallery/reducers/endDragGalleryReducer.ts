import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { END_DRAG, EndDragAction } from '../actions/endDrag';
import { continueThreshold, GalleryState } from '../galleryState';

export const endDragGalleryReducer = createKeyableReducer<
  GalleryState,
  EndDragAction
>(END_DRAG, state =>
  immer(state, draft => {
    const { percent, index } = state;
    draft.index =
      Math.abs(percent) > continueThreshold
        ? index + Math.sign(percent) * Math.ceil(Math.abs(percent))
        : index;
    draft.percent = 0;
    draft.dragging = false;
  })
);
