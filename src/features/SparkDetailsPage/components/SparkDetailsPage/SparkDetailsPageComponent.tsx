import { Grid } from '@material-ui/core';
import { SparkPanelFooter } from 'features/SparkDetailsPage/components/SparkPanelFooter/SparkPanelFooterComponent';
import {
  SparkPanelFullSquares,
} from 'features/SparkDetailsPage/components/SparkPanelFullSquares/SparkPanelFullSquaresComponent';
import { SparkPanelHeader } from 'features/SparkDetailsPage/components/SparkPanelHeader/SparkPanelHeaderComponent';
import { SparkPanelMark } from 'features/SparkDetailsPage/components/SparkPanelMark/SparkPanelMarkComponent';
import {
  SparkPanelTypography,
} from 'features/SparkDetailsPage/components/SparkPanelTypography/SparkPanelTypographyComponent';
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
