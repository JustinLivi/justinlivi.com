import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from './reducers';

import Card from './component';

export default ( mapStateToProps = ({ card: { cardWidth } }, { percent }) => {
    const halfWidth = Math.floor( cardWidth / 2 );
    const edgeWidth = Math.ceil( cardWidth / 50 );
    const halfEdge = Math.floor( edgeWidth / 2 );
    const iterator = Math.sin(( 0.2 + percent ) * Math.PI );
    const grow = Math.tan(( 0.2 + percent ) * Math.PI );
    const growBounce = grow < 0 ? grow * -1 : grow;
    const bounce = iterator < 0 ? iterator * -1 : iterator;
    const height = Math.min( growBounce * edgeWidth * 2, 100 );
    return {
        percent,
        cardWidth,
        halfWidth,
        halfEdge,
        edgeWidth,
        iterator,
        bounce,
        height,
    };
}) => withRouter( connect( mapStateToProps, actions )( Card ));
