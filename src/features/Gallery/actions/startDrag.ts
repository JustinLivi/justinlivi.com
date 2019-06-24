import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const START_DRAG = 'START_DRAG';

export interface StartDragActionArgs {
  startX: number;
}

export interface StartDragAction extends FluxStandardAction<typeof START_DRAG> {
  payload: {
    startX: number;
  };
}

export const startDrag = createActionCreator<
  StartDragActionArgs,
  StartDragAction
>(payload => ({
  payload,
  type: START_DRAG
}));
