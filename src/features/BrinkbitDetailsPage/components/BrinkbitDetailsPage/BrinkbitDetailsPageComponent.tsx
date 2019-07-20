import { Grid } from '@material-ui/core';
import {
  BrinkbitPanelFontface,
} from 'features/BrinkbitDetailsPage/components/BrinkbitPanelFontface/BrinkbitPanelFontfaceComponent';
import {
  BrinkbitPanelFooter,
} from 'features/BrinkbitDetailsPage/components/BrinkbitPanelFooter/BrinkbitPanelFooterComponent';
import {
  BrinkbitPanelFullSquares,
} from 'features/BrinkbitDetailsPage/components/BrinkbitPanelFullSquares/BrinkbitPanelFullSquaresComponent';
import {
  BrinkbitPanelHeader,
} from 'features/BrinkbitDetailsPage/components/BrinkbitPanelHeader/BrinkbitPanelHeaderComponent';
import {
  BrinkbitPanelTypography,
} from 'features/BrinkbitDetailsPage/components/BrinkbitPanelTypography/BrinkbitPanelTypographyComponent';
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
