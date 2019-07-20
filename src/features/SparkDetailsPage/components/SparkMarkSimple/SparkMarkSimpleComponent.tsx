import classNames from 'classnames/bind';
import React from 'react';

import styles from './SparkMarkStyles.module.scss';

const cx = classNames.bind(styles);

export interface SparkMarkSimpleProps {
  inverted?: boolean;
}

export const SparkMarkSimple: React.SFC<SparkMarkSimpleProps> = ({
  inverted
}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 81.19 83.66'>
    <rect
      className={cx(inverted ? 'dark' : 'light')}
      width='81.19'
      height='83.66'
    />
    <polygon
      className={cx(inverted ? 'white' : 'dark')}
      points='52.42 36.2 45.94 40.59 43.79 27.57 38.33 21.43 41.17 31.89 37.81 37.44 36.91 31.51 33.99 36.09 37.08 44.5 29.32 50.21 39.39 60.14 39.39 60.14 52.02 52.56 51.03 41.93 52.42 36.2'
    />
    <path
      className={cx(inverted ? 'white' : 'dark')}
      d='M33,42.23a28.16,28.16,0,0,1-2.21-3.37V33.41l-3.24,7.67L30,45.37Z'
    />
    <polygon
      className={cx(inverted ? 'white' : 'dark')}
      points='50.97 33.66 47.34 29.26 48.07 33.3 46.97 36.69 50.97 33.66'
    />
  </svg>
);
