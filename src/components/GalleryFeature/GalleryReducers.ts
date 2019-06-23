import immer from 'immer';
import { combineKeyableReducers, createKeyableReducer } from 'redux-keyable';

import { GalleryState } from '../GalleryState';
import { SET_CARD_WIDTH, SetCardWidthAction } from './CardActions';

const initialState = {
  cardWidth: 0
};

export const setWidthReducer = createKeyableReducer<
  GalleryState,
  SetCardWidthAction
>(SET_CARD_WIDTH, (state, { payload }) =>
  immer(state, draft => {
    draft.cardWidth = payload.cardWidth;
  })
);

export const cardStandardRootReducer = combineKeyableReducers<GalleryState>(
  initialState
)(setWidthReducer);
