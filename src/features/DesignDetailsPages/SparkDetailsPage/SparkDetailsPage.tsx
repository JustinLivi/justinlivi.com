import React from 'react';
import { Grid } from '@material-ui/core';

import { SparkPanelFooter } from 'features/DesignDetailsPages/SparkDetailsPage/SparkPanelFooter';
import { SparkPanelFullSquares } from 'features/DesignDetailsPages/SparkDetailsPage/SparkPanelFullSquares';
import { SparkPanelHeader } from 'features/DesignDetailsPages/SparkDetailsPage/SparkPanelHeader';
import { SparkPanelMark } from 'features/DesignDetailsPages/SparkDetailsPage/SparkPanelMark';
import { SparkPanelTypography } from 'features/DesignDetailsPages/SparkDetailsPage/SparkPanelTypography';

export interface SparkDetailsPageProps {
  path: string;
}

export const SparkDetailsPage: React.FunctionComponent<SparkDetailsPageProps> = () => (
  <main>
    <Grid container={true}>
      <SparkPanelHeader />
      <SparkPanelTypography />
      <SparkPanelFullSquares />
      <SparkPanelMark />
      <SparkPanelFooter />
    </Grid>
  </main>
);
