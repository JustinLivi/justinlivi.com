import classNames from 'classnames/bind';
import React from 'react';

import styles from './HomeStyles.module.scss';

const cx = classNames.bind(styles);

export const HomeComponent: React.SFC = () => (
  <div className={cx('page')}>
    <h2>JUSTIN LIVI</h2>
  </div>
);
