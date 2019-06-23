import { connect } from 'react-redux';

import { goToRoute } from './LinkActions';
import { UnconnectedLink } from './LinkComponent';

export const Link = connect(
  undefined,
  {
    goToRoute
  }
)(UnconnectedLink);
