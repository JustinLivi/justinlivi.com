import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { SparkLinear } from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkLinear/SparkLinearComponent';
import React from 'react';

import styles from './SparkPanelFooterStyles.module.scss';

const cx = classNames.bind(styles);

export const SparkPanelFooter: React.SFC = () => (
  <Grid item xs={12}>
    <Grid container justify="center">
      <Grid item xs={8} sm={6} md={4}>
        <div className={cx('container')}>
          <SparkLinear />
        </div>
      </Grid>
    </Grid>
  </Grid>
);
