import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { SparkFullSquare } from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkFullSquare/SparkFullSquareComponent';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';
import React from 'react';

import styles from './SparkPanelFullSquaresStyles.module.scss';

const cx = classNames.bind(styles);

export const SparkPanelFullSquares: React.SFC = () => (
  <Grid container justify="center" className={cx('fullWidth')}>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <SparkFullSquare backgroundColorToken={ColorToken.sparkSecondary} />
    </Grid>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <SparkFullSquare backgroundColorToken={ColorToken.sparkGreySecondary} />
    </Grid>
  </Grid>
);
