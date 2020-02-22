import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './HitchdPanelHeaderStyles.module.scss';

const cx = classNames.bind(styles);

export const HitchdPanelHeader = () => (
  <Grid container justify='center'>
    <Grid item xs={3} sm={2} md={1}>
      <div className={cx('container')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          viewBox='0 0 49.9 48.08'
        >
          <defs>
            <linearGradient
              id='linear-gradient'
              y1='24.04'
              x2='49.9'
              y2='24.04'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#fd3f71' />
              <stop offset='1' stopColor='#ff6160' />
            </linearGradient>
          </defs>
          <path
            className={cx('cls-1')}
            d='M49.13,23.51h0a19.17,19.17,0,0,0-12.82-13A19.19,19.19,0,1,0,10,36a18.82,18.82,0,0,0,3.61,1.49,19.19,19.19,0,0,0,35.56-14Zm-20.49.87a10.72,10.72,0,0,1-6.43,5.16,11.25,11.25,0,0,1-2.22.4,10.78,10.78,0,0,1,7.7-11.4,10.21,10.21,0,0,1,2.23-.38A10.69,10.69,0,0,1,28.64,24.38ZM8.87,22.21A10.76,10.76,0,0,1,19.2,8.43a10.8,10.8,0,0,1,6.2,2l-.07,0a19.21,19.21,0,0,0-13.71,16.4A10.56,10.56,0,0,1,8.87,22.21Zm24.84,17a10.77,10.77,0,0,1-9.22-1.55l.08,0A19.24,19.24,0,0,0,38.3,21.26a10.75,10.75,0,0,1-4.59,18Z'
          />
        </svg>
      </div>
    </Grid>
  </Grid>
);
