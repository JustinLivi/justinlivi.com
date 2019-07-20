import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { HitchdLinear } from 'features/HitchdDetailsPage/components/HitchdLinear/HitchdLinearComponent';
import React from 'react';

import styles from './HitchdPanelFooterStyles.module.scss';

const cx = classNames.bind(styles);

export const HitchdPanelFooter: React.SFC = () => (
  <Grid item xs={12}>
    <Grid container justify='center'>
      <Grid item xs={10} sm={6} md={4}>
        <div className={cx('container')}>
          <HitchdLinear />
        </div>
      </Grid>
    </Grid>
  </Grid>
);
