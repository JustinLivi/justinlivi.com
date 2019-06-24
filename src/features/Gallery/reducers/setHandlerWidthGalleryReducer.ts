import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { SET_HANDLER_WIDTH, SetHandlerWidthAction } from '../actions/setHandlerWidth';
import { GalleryState } from '../galleryState';

export const setHandlerWidthGalleryReducer = createKeyableReducer<
  GalleryState,
  SetHandlerWidthAction
>(SET_HANDLER_WIDTH, (state, { payload }) =>
  immer(state, draft => {
    draft.handlerWidth = payload.handlerWidth;
  })
);
