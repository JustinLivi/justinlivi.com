import { connect } from 'react-redux';
import OpenSource from './component';

const CreateOpenSource = (
    mapStateToProps = ({ packages: { packages, isFetching } }) => ({ packages, isFetching })
) => connect( mapStateToProps )( OpenSource );

export default CreateOpenSource;
