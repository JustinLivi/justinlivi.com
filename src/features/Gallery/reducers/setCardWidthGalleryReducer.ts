import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { SET_CARD_WIDTH, SetCardWidthAction } from '../actions/setCardWidth';
import { GalleryState } from '../galleryState';

export const setCardWidthGalleryReducer = createKeyableReducer<
  GalleryState,
  SetCardWidthAction
>(SET_CARD_WIDTH, (state, { payload }) =>
  immer(state, draft => {
    draft.cardWidth = payload.cardWidth;
  })
);
