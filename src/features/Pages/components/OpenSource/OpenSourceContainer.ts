import { connect } from 'react-redux';

import { State } from '../../../../store/stateDefinition';
import { OpenSourceComponent } from './OpenSourceComponent';

export const mapStateToProps = ({
  pages: { packages, isFetching }
}: State) => ({
  packages,
  isFetching
});

export const OpenSourceContainer = connect(mapStateToProps)(
  OpenSourceComponent
);
