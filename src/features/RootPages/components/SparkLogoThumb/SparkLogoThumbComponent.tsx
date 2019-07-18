import classNames from 'classnames/bind';
import { SparkLogo } from 'features/RootPages/components/SparkLogo/SparkLogoComponent';
import React from 'react';

import styles from './SparkLogoThumbStyles.module.scss';

const cx = classNames.bind(styles);

export const SparkLogoThumb: React.SFC = () => (
  <div role='link' className={cx('thumb')}>
    <SparkLogo
      orangeClass={cx('orange')}
      yellowClass={cx('yellow')}
      redClass={cx('red')}
    />
  </div>
);
