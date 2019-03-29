import { merge, omit } from 'lodash';

import { END_DRAG, GO_TO_ROUTE, MOVE_DRAG, SET_HANDLER_WIDTH, START_DRAG } from '../components/Gallery/reducers';
import routes, { getIndex } from '../components/routes';

const startThreshold = 0.15;
const continueThreshold = 0.2;

function normalizePercent(percent) {
  if (Math.abs(percent) < startThreshold) {
    return 0;
  }
  return (percent - startThreshold * Math.sign(percent)) / (1 - startThreshold);
}

const ACTION_HANDLERS = {
  [MOVE_DRAG]: (state, { clientX }) => {
    if (!state.dragging) return state;
    const { startX, handlerWidth } = state;
    const _percent = (startX - clientX) / handlerWidth;
    return merge({}, state, {
      _percent,
      percent: normalizePercent(_percent)
    });
  },
  [START_DRAG]: (state, action) => merge({}, state, omit(action, 'type')),
  [END_DRAG]: (state, action) => {
    const { percent, index } = state;
    return merge({}, state, omit(action, 'type'), {
      index:
        Math.abs(percent) > continueThreshold
          ? index + Math.sign(percent) * Math.ceil(Math.abs(percent))
          : index,
      _percent: 0,
      percent: 0
    });
  },
  [GO_TO_ROUTE]: (state, { route }) => {
    const { index: oldIndex, frameCount } = state;
    const newIndex =
      getIndex(route) + frameCount * Math.floor(oldIndex / frameCount);
    const distance = Math.abs(oldIndex - newIndex);
    return merge({}, state, {
      index:
        distance === frameCount - 1
          ? oldIndex + Math.sign(oldIndex - newIndex)
          : newIndex
    });
  },
  [SET_HANDLER_WIDTH]: (state, action) => merge({}, state, omit(action, 'type'))
};

// ------------------------------------
// Reducer
// ------------------------------------
const index = getIndex(location.pathname);
const initialState = {
  index: index === -1 ? 0 : index,
  frameCount: routes.length,
  handlerWidth: 0,
  dragging: false,
  percent: 0
};

export const gallery = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
