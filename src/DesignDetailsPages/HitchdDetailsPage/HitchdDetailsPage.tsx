import React from 'react';
import { Grid } from '@material-ui/core';

import { HitchdPanelFooter } from 'DesignDetailsPages/HitchdDetailsPage/HitchdPanelFooter';
import { HitchdPanelFullSquares } from 'DesignDetailsPages/HitchdDetailsPage/HitchdPanelFullSquares';
import { HitchdPanelHeader } from 'DesignDetailsPages/HitchdDetailsPage/HitchdPanelHeader';
import { HitchdPanelTypography } from 'DesignDetailsPages/HitchdDetailsPage/HitchdPanelTypography';

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

// eslint-disable-next-line import/no-default-export
export default HitchdDetailsPage;
