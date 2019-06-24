import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const END_DRAG = 'END_DRAG';

export interface EndDragAction extends FluxStandardAction<typeof END_DRAG> {}

export const endDrag = createActionCreator<undefined, EndDragAction>(() => ({
  type: END_DRAG
}));
