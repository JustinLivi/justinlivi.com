import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const SET_HANDLER_WIDTH = 'SET_HANDLER_WIDTH';

export interface SetHandlerWidthActionArgs {
  handlerWidth: number;
}

export interface SetHandlerWidthAction
  extends FluxStandardAction<typeof SET_HANDLER_WIDTH> {
  payload: {
    handlerWidth: number;
  };
}

export const setHandlerWidth = createActionCreator<
  SetHandlerWidthActionArgs,
  SetHandlerWidthAction
>(payload => ({
  payload,
  type: SET_HANDLER_WIDTH
}));
