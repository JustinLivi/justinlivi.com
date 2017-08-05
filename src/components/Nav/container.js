import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { reducers } from '../Gallery/reducers';
import Nav from './component';

export default ( mapStateToProps = ( state, ownProps ) => ({
    routes: ownProps.routes,
    route: ownProps.route,
    dragging: state.gallery.dragging,
    index: state.gallery.index,
    percent: state.gallery.percent,
    frameCount: state.gallery.frameCount,
})) => {
    const mapDispatchToProps = reducers;
    return withRouter( connect( mapStateToProps, mapDispatchToProps )( Nav ));
};
