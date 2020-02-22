import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import {
  BrinkbitLinear,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitLinear/BrinkbitLinearComponent';
import React from 'react';

import styles from './BrinkbitPanelFooterStyles.module.scss';

const cx = classNames.bind(styles);

export const BrinkbitPanelFooter: React.SFC = () => (
  <Grid item xs={12}>
    <Grid container justify="center">
      <Grid item xs={8} sm={6} md={4}>
        <div className={cx('container')}>
          <BrinkbitLinear />
        </div>
      </Grid>
    </Grid>
  </Grid>
);
