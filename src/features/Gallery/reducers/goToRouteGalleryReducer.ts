import immer from 'immer';
import { createKeyableReducer } from 'redux-keyable';

import { getIndex, routes } from '../../Pages/routes';
import { GO_TO_ROUTE, GoToRouteAction } from '../actions/goToRoute';
import { GalleryState } from '../galleryState';

const frameCount = routes.length;

export const goToRouteGalleryReducer = createKeyableReducer<
  GalleryState,
  GoToRouteAction
>(GO_TO_ROUTE, (state, { payload: { route } }) =>
  immer(state, draft => {
    const { index: oldIndex } = state;
    const newIndex =
      getIndex(route) + frameCount * Math.floor(oldIndex / frameCount);
    const distance = Math.abs(oldIndex - newIndex);
    draft.index =
      distance === frameCount - 1
        ? oldIndex + Math.sign(oldIndex - newIndex)
        : newIndex;
  })
);
