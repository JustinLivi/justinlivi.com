import classNames from 'classnames';
import React from 'react';

import { LinkContainer } from '../../../Gallery/components/Link/LinkContainer';
import styles from './NavStyles.scss';

const cx = classNames.bind(styles);

export const NavComponent = () => (
  <nav>
    <LinkContainer to='/home/' className={cx('navItem', 'left')}>
      JUSTIN LIVI
    </LinkContainer>
    <LinkContainer to='/contact/' className={cx('navItem', 'right')}>
      CONTACT
    </LinkContainer>
  </nav>
);
