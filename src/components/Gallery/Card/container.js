import { connect } from 'react-redux';
import {
    setCardWidth,
} from './reducers';

import Card from './component';

export default ( mapStateToProps = ( state, ownProps ) => ({
    percent: ownProps.percent,
    cardWidth: state.card.cardWidth,
})) => {
    const mapDispatchToProps = {
        setCardWidth,
    };
    return connect( mapStateToProps, mapDispatchToProps )( Card );
};
