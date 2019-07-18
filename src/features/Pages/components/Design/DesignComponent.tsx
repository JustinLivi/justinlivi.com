import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { BrinkbitLogoThumb } from 'features/Pages/components/BrinkbitLogoThumb/BrinkbitLogoThumbComponent';
import { DesignCard } from 'features/Pages/components/DesignCard/DesignCardComponent';
import { SparkLogoThumb } from 'features/Pages/components/SparkLogoThumb/SparkLogoThumbComponent';
import React from 'react';

import styles from './DesignStyles.module.scss';

const cx = classNames.bind(styles);

export interface DesignProps {
  path: string;
}

export const Design: React.SFC<DesignProps> = () => (
  <Grid container spacing={3}>
    <DesignCard
      thumb={<BrinkbitLogoThumb />}
      target='./brinkbit'
      title='brinkbit'
    />
    <DesignCard thumb={<SparkLogoThumb />} target='./spark' title='spark' />
  </Grid>
);
