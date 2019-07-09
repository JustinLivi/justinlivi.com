import classNames from 'classnames/bind';
import React from 'react';

import styles from './DesignStyles.module.scss';

const cx = classNames.bind(styles);

export interface DesignProps {
  path: string;
}

export const DesignComponent: React.SFC<DesignProps> = () => (
  <div className={cx('page')}>
    <div className={cx('container', 'brinkbit-logo')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 53.81 71.75'>
        <polygon
          className={cx('logo', 'brinkbit-logo-blue')}
          points='17.94 17.94 17.94 0 0 0 0 71.75 35.88 71.75 35.88 53.81 17.94 53.81 17.94 35.88 35.88 35.88 35.88 53.81 53.81 53.81 53.81 17.94 17.94 17.94'
        />
      </svg>
    </div>
    <div className={cx('container', 'spark-logo')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 69.56 107.45'>
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='69.56 40.57 51.53 53.08 45.5 16.45 30.15 0 38.02 28.48 28.37 44 26.04 27.14 17.82 40.16 26.59 63.9 4.32 79.63 33.3 107.45 68.41 86.35 65.17 56.5 69.56 40.57'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='65.36 33.44 55.22 21.66 57.13 32.62 54.44 41.96 65.36 33.44'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='15.35 57.58 8.63 48.36 9.32 32.62 0 54.56 6.99 66.8 15.35 57.58'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='30.15 0 38.1 28.78 45.5 16.45 30.15 0'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='17.82 40.16 26.04 27.14 28.37 44 17.82 40.16'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='8.63 48.36 6.99 66.8 0 54.56 8.63 48.36'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='28.37 44 26.59 63.9 51.53 53.08 28.37 44'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='69.56 40.57 51.53 53.08 65.17 56.5 69.56 40.57'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='57.13 32.62 54.44 41.96 65.36 33.44 57.13 32.62'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='35.5 89.5 51.53 53.08 68.41 86.35 35.5 89.5'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='33.3 107.45 35.5 89.5 4.32 79.63 33.3 107.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='26.59 63.9 4.32 79.63 35.5 89.5 26.59 63.9'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='33.3 107.45 35.5 89.5 68.41 86.35 33.3 107.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='65.17 56.5 51.53 53.08 68.41 86.35 65.17 56.5'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='8.63 48.36 6.99 66.8 15.35 57.58 8.63 48.36'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='17.82 40.16 26.59 63.9 28.37 44 17.82 40.16'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='45.5 16.45 28.37 44 51.53 53.08 45.5 16.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='55.22 21.66 57.13 32.62 65.36 33.44 55.22 21.66'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='51.53 53.08 35.5 89.5 26.59 63.9 51.53 53.08'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='8.63 48.36 0 54.56 9.32 32.62 8.63 48.36'
        />
      </svg>
    </div>
  </div>
);
