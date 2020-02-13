import classNames from 'classnames/bind';
import React from 'react';

import styles from './HitchdLogoThumbStyles.module.scss';

const cx = classNames.bind(styles);

export const HitchdLogoThumb: React.SFC = () => (
  <div role='link' className={cx('thumb')}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 324.03 174.83'>
      <rect className={cx('background')} width='324.03' height='174.83' />
      <path
        className={cx('primary')}
        d='M207.33,86.42h0A35.75,35.75,0,0,0,190.1,64.94a36.65,36.65,0,0,0-6.8-2.87,36,36,0,1,0-49.37,47.82,36.58,36.58,0,0,0,6.75,2.8,36,36,0,0,0,66.65-26.27Zm-38.4,1.64a20.08,20.08,0,0,1-12.05,9.66,20.54,20.54,0,0,1-4.16.75,20.2,20.2,0,0,1,14.42-21.36,19.66,19.66,0,0,1,4.18-.71A20,20,0,0,1,168.93,88.06ZM131.87,84a20.13,20.13,0,0,1,31-22.09l-.14,0A36,36,0,0,0,137,92.66,20,20,0,0,1,131.87,84Zm46.56,31.86a20.13,20.13,0,0,1-17.28-2.92l.15,0A36.06,36.06,0,0,0,187,82.21a20.15,20.15,0,0,1-8.6,33.64Z'
      />
    </svg>
  </div>
);