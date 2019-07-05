import classNames from 'classnames/bind';
import React from 'react';

import { LinkContainer } from '../Link/LinkContainer';
import styles from './BrandStyles.module.scss';

const cx = classNames.bind(styles);

export const BrandComponent: React.SFC = () => (
  <nav>
    <LinkContainer to='/' className={cx('brand')}>
      JL
    </LinkContainer>
  </nav>
);
