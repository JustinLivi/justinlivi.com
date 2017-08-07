import merge from 'lodash.merge';
import omit from 'lodash.omit';
import findIndex from 'lodash.findindex';
import routes from '../routes';

// ------------------------------------
// Constants
// ------------------------------------
const threshold = 0.2;
export const MOVE_DRAG = 'MOVE_DRAG';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';
export const SET_HANDLER_WIDTH = 'SET_HANDLER_WIDTH';
export const GO_TO_ROUTE = 'GO_TO_ROUTE';

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

export function goToRoute( index ) {
    return {
        type: GO_TO_ROUTE,
        index,
    };
}

export const actions = {
    drag,
    startDrag,
    endDrag,
    setHandlerWidth,
    goToRoute,
};

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
    [GO_TO_ROUTE]: ( state, { route }) => {
        const newIndex = routes.indexOf( route );
        const { index: oldIndex, frameCount } = state;
        return merge({}, state, {
            index: ( newIndex === -1 ? 0 : newIndex ) +
                ( frameCount * Math.round( oldIndex / frameCount )),
        });
    },
    [SET_HANDLER_WIDTH]: ( state, action ) => merge({}, state, omit( action, 'type' )),
};

// ------------------------------------
// Reducer
// ------------------------------------
const index = findIndex( routes, route => location.pathname.match( new RegExp( `^/${route}/` )));
const initialState = {
    index: index === -1 ? 0 : index,
    frameCount: routes.length,
    handlerWidth: 0,
    dragging: false,
    percent: 0,
};
export default function galleryReducer( state = initialState, action ) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler( state, action ) : state;
}
