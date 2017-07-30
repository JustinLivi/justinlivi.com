import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    drag,
    startDrag,
    endDrag,
    setHandlerWidth,
} from './reducers';
import Gallery from './component';

export default ( mapStateToProps = ( state, ownProps ) => ({
    routes: ownProps.routes,
    dragging: state.gallery.dragging,
    index: state.gallery.index,
    percent: state.gallery.percent,
    frameCount: state.gallery.frameCount,
})) => {
    const mapDispatchToProps = {
        drag,
        startDrag,
        endDrag,
        setHandlerWidth,
    };
    return withRouter( connect( mapStateToProps, mapDispatchToProps )( Gallery ));
};
