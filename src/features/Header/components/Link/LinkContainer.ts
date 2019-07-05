import { connect } from 'react-redux';

import { goToRoute } from '../../actions/goToRoute';
import { LinkComponent } from './LinkComponent';

export const LinkContainer = connect(
  undefined,
  {
    goToRoute
  }
)(LinkComponent);
