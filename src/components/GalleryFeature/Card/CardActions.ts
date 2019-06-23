import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const SET_CARD_WIDTH = 'SET_CARD_WIDTH';

export interface CardWidth {
  cardWidth: number;
}

export interface SetCardWidthAction
  extends FluxStandardAction<typeof SET_CARD_WIDTH> {
  payload: CardWidth;
}

export const setCardWidth = createActionCreator<CardWidth, SetCardWidthAction>(
  payload => ({
    payload,
    type: SET_CARD_WIDTH
  })
);
