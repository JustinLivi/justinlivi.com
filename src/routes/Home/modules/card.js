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
export default function galleryReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
