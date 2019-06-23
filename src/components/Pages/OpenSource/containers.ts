import { connect } from 'react-redux';

import { OpenSource } from './component';

export const CreateOpenSource = (
  mapStateToProps = ({ packages: { packages, isFetching } }) => ({
    packages,
    isFetching
  })
) => connect(mapStateToProps)(OpenSource);
