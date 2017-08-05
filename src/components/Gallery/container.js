import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reducers } from './reducers';
import Gallery from './component';

export default ( mapStateToProps = ( state, ownProps ) => ({
    routes: ownProps.routes,
    route: ownProps.route,
    dragging: state.gallery.dragging,
    index: state.gallery.index,
    percent: state.gallery.percent,
    frameCount: state.gallery.frameCount,
})) => {
    const mapDispatchToProps = reducers;
    return withRouter( connect( mapStateToProps, mapDispatchToProps )( Gallery ));
};
