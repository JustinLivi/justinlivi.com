import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { SparkMarkComplex } from 'features/SparkDetailsPage/components/SparkMarkComplex/SparkMarkComplexComponent';
import { SparkMarkSimple } from 'features/SparkDetailsPage/components/SparkMarkSimple/SparkMarkSimpleComponent';
import React from 'react';

import styles from './SparkPanelMarkStyles.module.scss';

const cx = classNames.bind(styles);

export const SparkPanelMark: React.SFC = () => (
  <Grid container justify='center' className={cx('fullWidth')}>
    <Grid item xs={10} sm={3} md={3} className={cx('square')}>
      <SparkMarkSimple />
    </Grid>
    <Grid item xs={10} sm={3} md={3} className={cx('square')}>
      <SparkMarkSimple inverted />
    </Grid>
    <Grid item xs={10} sm={3} md={3} className={cx('square')}>
      <SparkMarkComplex />
    </Grid>
  </Grid>
);
