import { merge, omit } from 'lodash';

import { SET_CARD_WIDTH } from '../components/Gallery/Card/actions';

const ACTION_HANDLERS = {
  [SET_CARD_WIDTH]: (state, action) => merge({}, state, omit(action, 'type'))
};

const initialState = {
  cardWidth: 0
};

export const card = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};
