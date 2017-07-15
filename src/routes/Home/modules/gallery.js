const merge = require( 'lodash.merge' );
const omit = require( 'lodash.omit' );

// ------------------------------------
// Constants
// ------------------------------------
export const MOVE_DRAG = 'MOVE_DRAG';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';
export const RESIZE = 'RESIZE';

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

export function resize( bounds ) {
    return {
        type: RESIZE,
        bounds,
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
    [MOVE_DRAG]: ( state, { clientX }) => {
        if ( !state.dragging ) return state;
        const { startPercent, startX, bounds: { width } } = state;
        return merge({}, state, {
            percent: startPercent + (( startX - clientX ) / width ),
        });
    },
    [START_DRAG]: ( state, action ) => merge(
        {},
        state,
        omit( action, 'type' ),
        { startPercent: state.percent }
    ),
    [END_DRAG]: ( state, action ) => merge({}, state, omit( action, 'type' )),
    [RESIZE]: ( state, action ) => merge({}, state, omit( action, 'type' )),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    index: 0,
    dragging: false,
    percent: 0,
    startPercent: 0,
};
export default function galleryReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
