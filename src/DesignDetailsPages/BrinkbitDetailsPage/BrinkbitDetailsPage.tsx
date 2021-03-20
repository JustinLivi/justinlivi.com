import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import { Main } from 'SharedComponents/Main';
import { BrinkbitPanelFontface } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFontface';
import { BrinkbitPanelFooter } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFooter';
import { BrinkbitPanelFullSquares } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFullSquares';
import { BrinkbitPanelHeader } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelHeader';
import { BrinkbitPanelTypography } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelTypography';

export const BrinkbitDetailsPage: React.FunctionComponent = () => (
  <Main>
    <Helmet>
      <title>Justin Livi - Brinkbit</title>
    </Helmet>
    <Grid container={true}>
      <BrinkbitPanelHeader />
      <BrinkbitPanelTypography />
      <BrinkbitPanelFullSquares />
      <BrinkbitPanelFontface />
      <BrinkbitPanelFooter />
    </Grid>
  </Main>
);

// eslint-disable-next-line import/no-default-export
export default BrinkbitDetailsPage;
