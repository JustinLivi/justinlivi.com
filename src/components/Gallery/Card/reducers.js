const merge = require( 'lodash.merge' );
const omit = require( 'lodash.omit' );

// ------------------------------------
// Constants
// ------------------------------------
export const SET_CARD_WIDTH = 'SET_CARD_WIDTH';

// ------------------------------------
// Actions
// ------------------------------------
export function setCardWidth( cardWidth ) {
    return {
        type: SET_CARD_WIDTH,
        cardWidth,
    };
}

export const actions = { setCardWidth };

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [SET_CARD_WIDTH]: ( state, action ) => merge({}, state, omit( action, 'type' )),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    cardWidth: 0,
};

export default function cardReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
