import classNames from 'classnames/bind';
import React from 'react';

import { LinkContainer } from '../../../Gallery/components/Link/LinkContainer';
import styles from './HeaderComponent.module.scss';

const cx = classNames.bind(styles);

console.log(styles);

export const HeaderComponent = () => (
  <nav>
    <LinkContainer to='/home/' className={cx('navItem')}>
      JUSTIN LIVI
    </LinkContainer>
    <LinkContainer to='/contact/' className={cx('navItem')}>
      CONTACT
    </LinkContainer>
  </nav>
);
