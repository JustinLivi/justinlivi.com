import React from 'react';
import { Grid } from '@material-ui/core';

import { BrinkbitPanelFontface } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFontface';
import { BrinkbitPanelFooter } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFooter';
import { BrinkbitPanelFullSquares } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelFullSquares';
import { BrinkbitPanelHeader } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelHeader';
import { BrinkbitPanelTypography } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitPanelTypography';

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
