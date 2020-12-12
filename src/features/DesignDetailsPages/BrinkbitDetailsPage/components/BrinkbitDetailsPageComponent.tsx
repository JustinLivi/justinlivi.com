import { Grid } from '@material-ui/core';
import {
  BrinkbitPanelFontface,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFontfaceComponent';
import {
  BrinkbitPanelFooter,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFooterComponent';
import {
  BrinkbitPanelFullSquares,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelFullSquaresComponent';
import {
  BrinkbitPanelHeader,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelHeaderComponent';
import {
  BrinkbitPanelTypography,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitPanelTypographyComponent';
import React from 'react';

export interface BrinkbitDetailsPageProps {
  path: string;
}

export const BrinkbitDetailsPage: React.FunctionComponent<BrinkbitDetailsPageProps> = () => (
  <main>
    <Grid container={true} >
      <BrinkbitPanelHeader />
      <BrinkbitPanelTypography />
      <BrinkbitPanelFullSquares />
      <BrinkbitPanelFontface />
      <BrinkbitPanelFooter />
    </Grid>
  </main>
);
