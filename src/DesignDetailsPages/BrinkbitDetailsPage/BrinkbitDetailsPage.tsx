import React from 'react';
import { Grid } from '@material-ui/core';

import { BrinkbitPanelFontface } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFontface';
import { BrinkbitPanelFooter } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFooter';
import { BrinkbitPanelFullSquares } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFullSquares';
import { BrinkbitPanelHeader } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelHeader';
import { BrinkbitPanelTypography } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelTypography';

export interface BrinkbitDetailsPageProps {
  path: string;
}

export const BrinkbitDetailsPage: React.FunctionComponent<BrinkbitDetailsPageProps> = () => (
  <main>
    <Grid container={true}>
      <BrinkbitPanelHeader />
      <BrinkbitPanelTypography />
      <BrinkbitPanelFullSquares />
      <BrinkbitPanelFontface />
      <BrinkbitPanelFooter />
    </Grid>
  </main>
);
