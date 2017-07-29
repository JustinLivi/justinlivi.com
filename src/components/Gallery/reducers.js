const merge = require( 'lodash.merge' );
const omit = require( 'lodash.omit' );

// ------------------------------------
// Constants
// ------------------------------------
const threshold = 0.2;
export const MOVE_DRAG = 'MOVE_DRAG';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';
export const SET_HANDLER_WIDTH = 'SET_HANDLER_WIDTH';
export const SET_CARD_WIDTH = 'SET_CARD_WIDTH';

// ------------------------------------
// Actions
// ------------------------------------
export function drag( clientX = 0 ) {
    return {
        type: MOVE_DRAG,
        clientX,
    };
}

export function startDrag( startX = 0 ) {
    return {
        type: START_DRAG,
        dragging: true,
        startX,
    };
}

export function endDrag() {
    return {
        type: END_DRAG,
        dragging: false,
    };
}

export function setHandlerWidth( handlerWidth ) {
    return {
        type: SET_HANDLER_WIDTH,
        handlerWidth,
    };
}

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
    [MOVE_DRAG]: ( state, { clientX }) => {
        if ( !state.dragging ) return state;
        const { startX, handlerWidth } = state;
        return merge({}, state, {
            percent: ( startX - clientX ) / handlerWidth,
        });
    },
    [START_DRAG]: ( state, action ) => merge({}, state, omit( action, 'type' )),
    [END_DRAG]: ( state, action ) => {
        const { percent, index } = state;
        return merge({}, state, omit( action, 'type' ), {
            index: Math.abs( percent ) > threshold ?
                index + ( Math.sign( percent ) * Math.ceil( Math.abs( percent ))) :
                index,
            percent: 0,
        });
    },
    [SET_HANDLER_WIDTH]: ( state, action ) => merge({}, state, omit( action, 'type' )),
    [SET_CARD_WIDTH]: ( state, action ) => merge({}, state, omit( action, 'type' )),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    index: 0,
    handlerWidth: 0,
    dragging: false,
    percent: 0,
};
export default function galleryReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
