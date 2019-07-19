import { Grid } from '@material-ui/core';
import { SparkPanelFooter } from 'features/DesignDetailsPages/components/SparkPanelFooter/SparkPanelFooterComponent';
import {
  SparkPanelFullSquares,
} from 'features/DesignDetailsPages/components/SparkPanelFullSquares/SparkPanelFullSquaresComponent';
import { SparkPanelHeader } from 'features/DesignDetailsPages/components/SparkPanelHeader/SparkPanelHeaderComponent';
import { SparkPanelMark } from 'features/DesignDetailsPages/components/SparkPanelMark/SparkPanelMarkComponent';
import {
  SparkPanelTypography,
} from 'features/DesignDetailsPages/components/SparkPanelTypography/SparkPanelTypographyComponent';
import React from 'react';

export interface SparkDetailsPageProps {
  path: string;
}

export const SparkDetailsPage: React.SFC<SparkDetailsPageProps> = () => (
  <main>
    <Grid container>
      <SparkPanelHeader />
      <SparkPanelTypography />
      <SparkPanelFullSquares />
      <SparkPanelMark />
      <SparkPanelFooter />
    </Grid>
  </main>
);
