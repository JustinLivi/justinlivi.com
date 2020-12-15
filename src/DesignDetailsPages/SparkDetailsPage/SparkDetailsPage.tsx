import React from 'react';
import { Grid } from '@material-ui/core';

import { SparkPanelFooter } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelFooter';
import { SparkPanelFullSquares } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelFullSquares';
import { SparkPanelHeader } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelHeader';
import { SparkPanelMark } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelMark';
import { SparkPanelTypography } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelTypography';

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
