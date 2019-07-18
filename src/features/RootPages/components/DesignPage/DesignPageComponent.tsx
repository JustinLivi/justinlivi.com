import { Grid } from '@material-ui/core';
import { BrinkbitLogoThumb } from 'features/RootPages/components/BrinkbitLogoThumb/BrinkbitLogoThumbComponent';
import { DesignCard } from 'features/RootPages/components/DesignCard/DesignCardComponent';
import { SparkLogoThumb } from 'features/RootPages/components/SparkLogoThumb/SparkLogoThumbComponent';
import React from 'react';

export interface DesignPageProps {
  path: string;
}

export const DesignPage: React.SFC<DesignPageProps> = () => (
  <Grid container spacing={3}>
    <DesignCard
      thumb={<BrinkbitLogoThumb />}
      target='./brinkbit'
      title='brinkbit'
    />
    <DesignCard thumb={<SparkLogoThumb />} target='./spark' title='spark' />
  </Grid>
);
