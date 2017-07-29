import { connect } from 'react-redux';
import {
    drag,
    startDrag,
    endDrag,
    setHandlerWidth,
} from './reducers';
import Gallery from './component';

export default ( mapStateToProps = state => ({
    dragging: state.gallery.dragging,
    index: state.gallery.index,
    percent: state.gallery.percent,
})) => {
    const mapDispatchToProps = {
        drag,
        startDrag,
        endDrag,
        setHandlerWidth,
    };
    return connect( mapStateToProps, mapDispatchToProps )( Gallery );
};
