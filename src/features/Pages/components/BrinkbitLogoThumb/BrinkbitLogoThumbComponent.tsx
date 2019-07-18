import classNames from 'classnames/bind';
import { BrinkbitLogo } from 'features/Pages/components/BrinkbitLogo/BrinkbitLogoComponent';
import React from 'react';

import styles from './BrinkbitLogoThumbStyles.module.scss';

const cx = classNames.bind(styles);

export const BrinkbitLogoThumb: React.SFC = () => (
  <div role='link' className={cx('thumb')}>
    <BrinkbitLogo blueClass={cx('blue')} />
  </div>
);
