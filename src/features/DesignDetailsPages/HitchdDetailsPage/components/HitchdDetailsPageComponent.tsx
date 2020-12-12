import { Grid } from '@material-ui/core';
import {
  HitchdPanelFooter,
} from 'features/DesignDetailsPages/HitchdDetailsPage/components/HitchdPanelFooter/HitchdPanelFooterComponent';
import {
  HitchdPanelFullSquares,
} from 'features/DesignDetailsPages/HitchdDetailsPage/components/HitchdPanelFullSquares/HitchdPanelFullSquaresComponent';
import {
  HitchdPanelHeader,
} from 'features/DesignDetailsPages/HitchdDetailsPage/components/HitchdPanelHeader/HitchdPanelHeaderComponent';
import {
  HitchdPanelTypography,
} from 'features/DesignDetailsPages/HitchdDetailsPage/components/HitchdPanelTypography/HitchdPanelTypographyComponent';
import React from 'react';

export interface HitchdDetailsPageProps {
  path: string;
}

export const HitchdDetailsPage: React.SFC<HitchdDetailsPageProps> = () => (
  <main>
    <Grid container>
      <HitchdPanelHeader />
      <HitchdPanelTypography />
      <HitchdPanelFullSquares />
      <HitchdPanelFooter />
    </Grid>
  </main>
);
