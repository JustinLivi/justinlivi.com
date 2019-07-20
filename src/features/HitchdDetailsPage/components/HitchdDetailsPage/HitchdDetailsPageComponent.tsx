import { Grid } from '@material-ui/core';
import { HitchdPanelFooter } from 'features/HitchdDetailsPage/components/HitchdPanelFooter/HitchdPanelFooterComponent';
import {
  HitchdPanelFullSquares,
} from 'features/HitchdDetailsPage/components/HitchdPanelFullSquares/HitchdPanelFullSquaresComponent';
import { HitchdPanelHeader } from 'features/HitchdDetailsPage/components/HitchdPanelHeader/HitchdPanelHeaderComponent';
import {
  HitchdPanelTypography,
} from 'features/HitchdDetailsPage/components/HitchdPanelTypography/HitchdPanelTypographyComponent';
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
