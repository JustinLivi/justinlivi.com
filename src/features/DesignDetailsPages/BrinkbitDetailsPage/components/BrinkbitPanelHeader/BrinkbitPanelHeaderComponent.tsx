import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './BrinkbitPanelHeaderStyles.module.scss';

const cx = classNames.bind(styles);

export const BrinkbitPanelHeader = () => (
  <Grid container justify='center'>
    <Grid item xs={3} sm={2} md={1}>
      <div className={cx('container')}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36.06 48.08'>
          <polygon
            className={cx('cls-1')}
            points='12.02 12.02 12.02 0 0 0 0 48.08 24.04 48.08 24.04 36.06 12.02 36.06 12.02 24.04 24.04 24.04 24.04 36.06 36.06 36.06 36.06 12.02 12.02 12.02'
          />
        </svg>
      </div>
    </Grid>
  </Grid>
);
