import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from './reducers';
import SwipeHandlerComponent from './components/SwipeHandler';
import LinkComponent from './components/Link';

export const CreateSwipeHandler = ( mapStateToProps = ( state, ownProps ) => ({
    routes: ownProps.routes,
    dragging: state.gallery.dragging,
    index: state.gallery.index,
    percent: state.gallery.percent,
    frameCount: state.gallery.frameCount,
})) => withRouter( connect( mapStateToProps, actions )( SwipeHandlerComponent ));

export const CreateLink = ( mapStateToProps = ( state, ownProps ) => ({
    to: ownProps.to,
    role: ownProps.role,
    tabIndex: ownProps.tabIndex,
    className: ownProps.className,
})) =>
    withRouter( connect( mapStateToProps, actions )( LinkComponent ));

export default {
    CreateSwipeHandler,
    CreateLink,
};
