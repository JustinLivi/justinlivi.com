const merge = require( 'lodash.merge' );

// ------------------------------------
// Constants
// ------------------------------------
export const MOVE_DRAG = 'MOVE_DRAG';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';

// ------------------------------------
// Actions
// ------------------------------------
export function drag( value = 0 ) {
    return {
        type: MOVE_DRAG,
        payload: value,
    };
}

export function startDrag() {
    return {
        type: START_DRAG,
        payload: true,
    };
}

export function endDrag() {
    return {
        type: END_DRAG,
        payload: false,
    };
}

export const actions = {
    drag,
    startDrag,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [MOVE_DRAG]: ( state, action ) => (
        state.dragging ? merge({}, state, { percent: action.payload }) : state
    ),
    [START_DRAG]: ( state, action ) => merge({}, state, { dragging: action.payload }),
    [END_DRAG]: ( state, action ) => merge({}, state, { dragging: action.payload }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    index: 0,
    dragging: false,
    percent: 0,
};
export default function galleryReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
