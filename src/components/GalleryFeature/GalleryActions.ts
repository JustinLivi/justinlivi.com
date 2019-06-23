export const MOVE_DRAG = 'MOVE_DRAG';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';
export const SET_HANDLER_WIDTH = 'SET_HANDLER_WIDTH';

export const drag = (clientX: number = 0) => ({
  clientX,
  type: MOVE_DRAG
});

export const startDrag = (startX: number = 0) => ({
  startX,
  type: START_DRAG,
  dragging: true
});

export const endDrag = () => ({
  type: END_DRAG,
  dragging: false
});

export const setHandlerWidth = (handlerWidth: number) => ({
  handlerWidth,
  type: SET_HANDLER_WIDTH
});
