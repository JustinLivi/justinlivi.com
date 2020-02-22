import { Grid } from '@material-ui/core';
import {
  BrinkbitPanelFontface,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFontface/BrinkbitPanelFontfaceComponent';
import {
  BrinkbitPanelFooter,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFooter/BrinkbitPanelFooterComponent';
import {
  BrinkbitPanelFullSquares,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFullSquares/BrinkbitPanelFullSquaresComponent';
import {
  BrinkbitPanelHeader,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelHeader/BrinkbitPanelHeaderComponent';
import {
  BrinkbitPanelTypography,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelTypography/BrinkbitPanelTypographyComponent';
import React from 'react';

export interface BrinkbitDetailsPageProps {
  path: string;
}

export const BrinkbitDetailsPage: React.SFC<BrinkbitDetailsPageProps> = () => (
  <main>
    <Grid container>
      <BrinkbitPanelHeader />
      <BrinkbitPanelTypography />
      <BrinkbitPanelFullSquares />
      <BrinkbitPanelFontface />
      <BrinkbitPanelFooter />
    </Grid>
  </main>
);
