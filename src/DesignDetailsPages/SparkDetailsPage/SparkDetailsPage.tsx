import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import { SparkPanelFooter } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelFooter';
import { SparkPanelFullSquares } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelFullSquares';
import { SparkPanelHeader } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelHeader';
import { SparkPanelMark } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelMark';
import { SparkPanelTypography } from 'DesignDetailsPages/SparkDetailsPage/SparkPanelTypography';

export const SparkDetailsPage: React.FunctionComponent = () => (
  <main>
    <Helmet>
      <title>Justin Livi - Spark</title>
    </Helmet>
    <Grid container={true}>
      <SparkPanelHeader />
      <SparkPanelTypography />
      <SparkPanelFullSquares />
      <SparkPanelMark />
      <SparkPanelFooter />
    </Grid>
  </main>
);

// eslint-disable-next-line import/no-default-export
export default SparkDetailsPage;
