import { Link } from '@reach/router';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './BrandStyles.module.scss';

const cx = classNames.bind(styles);

export const Brand: React.SFC = () => (
  <nav>
    <Link to='/' className={cx('brand')}>
      <span className={cx('wide')}>J</span>L
    </Link>
  </nav>
);
