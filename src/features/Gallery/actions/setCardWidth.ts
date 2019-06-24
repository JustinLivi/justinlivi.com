import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const SET_CARD_WIDTH = 'SET_CARD_WIDTH';

export interface SetCardWidthActionArgs {
  cardWidth: number;
}

export interface SetCardWidthAction
  extends FluxStandardAction<typeof SET_CARD_WIDTH> {
  payload: {
    cardWidth: number;
  };
}

export const setCardWidth = createActionCreator<
  SetCardWidthActionArgs,
  SetCardWidthAction
>(payload => ({
  payload,
  type: SET_CARD_WIDTH
}));
