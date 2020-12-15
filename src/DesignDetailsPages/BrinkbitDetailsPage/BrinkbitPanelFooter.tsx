import React from 'react';
import { Grid } from '@material-ui/core';

import { BrinkbitLinear } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitLinear';
import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';

export const BrinkbitPanelFooter: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <Grid container={true} justify="center">
      <Grid item={true} xs={8} sm={6} md={4}>
        <DesignContainerDiv>
          <BrinkbitLinear />
        </DesignContainerDiv>
      </Grid>
    </Grid>
  </Grid>
);
