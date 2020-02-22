import { Grid } from '@material-ui/core';
import {
  SparkPanelFooter,
} from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkPanelFooter/SparkPanelFooterComponent';
import {
  SparkPanelFullSquares,
} from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkPanelFullSquares/SparkPanelFullSquaresComponent';
import {
  SparkPanelHeader,
} from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkPanelHeader/SparkPanelHeaderComponent';
import {
  SparkPanelMark,
} from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkPanelMark/SparkPanelMarkComponent';
import {
  SparkPanelTypography,
} from 'features/DesignDetailsPages/SparkDetailsPage/components/SparkPanelTypography/SparkPanelTypographyComponent';
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
