import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { BrinkbitFullSquare } from 'features/BrinkbitDetailsPage/components/BrinkbitFullSquare/BrinkbitFullSquareComponent';
import React from 'react';

import styles from './BrinkbitPanelFullSquaresStyles.module.scss';

const cx = classNames.bind(styles);

export const BrinkbitPanelFullSquares: React.SFC = () => (
  <Grid container justify='center' className={cx('fullWidth')}>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <BrinkbitFullSquare />
    </Grid>
    <Grid item xs={10} sm={5} md={4} className={cx('square')}>
      <BrinkbitFullSquare backgroundClass={cx('darkBackground')} />
    </Grid>
  </Grid>
);
