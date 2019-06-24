import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const MOVE_DRAG = 'MOVE_DRAG';

export interface MoveDragActionArgs {
  clientX: number;
}

export interface MoveDragAction extends FluxStandardAction<typeof MOVE_DRAG> {
  payload: {
    clientX: number;
  };
}

export const moveDrag = createActionCreator<MoveDragActionArgs, MoveDragAction>(
  payload => ({
    payload,
    type: MOVE_DRAG
  })
);
