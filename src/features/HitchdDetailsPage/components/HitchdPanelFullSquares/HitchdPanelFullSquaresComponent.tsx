import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { HitchdFullSquare } from 'features/HitchdDetailsPage/components/HitchdFullSquare/HitchdFullSquareComponent';
import React from 'react';

import styles from './HitchdPanelFullSquaresStyles.module.scss';

const cx = classNames.bind(styles);

export const HitchdPanelFullSquares: React.SFC = () => (
  <Grid container justify='center' className={cx('fullWidth')}>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <HitchdFullSquare />
    </Grid>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <HitchdFullSquare inverted />
    </Grid>
  </Grid>
);
