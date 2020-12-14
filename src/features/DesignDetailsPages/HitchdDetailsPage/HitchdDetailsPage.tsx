import React from 'react';
import { Grid } from '@material-ui/core';

import { HitchdPanelFooter } from 'features/DesignDetailsPages/HitchdDetailsPage/HitchdPanelFooter';
import { HitchdPanelFullSquares } from 'features/DesignDetailsPages/HitchdDetailsPage/HitchdPanelFullSquares';
import { HitchdPanelHeader } from 'features/DesignDetailsPages/HitchdDetailsPage/HitchdPanelHeader';
import { HitchdPanelTypography } from 'features/DesignDetailsPages/HitchdDetailsPage/HitchdPanelTypography';

export interface HitchdDetailsPageProps {
  path: string;
}

export const HitchdDetailsPage: React.FunctionComponent<HitchdDetailsPageProps> = () => (
  <main>
    <Grid container={true}>
      <HitchdPanelHeader />
      <HitchdPanelTypography />
      <HitchdPanelFullSquares />
      <HitchdPanelFooter />
    </Grid>
  </main>
);
