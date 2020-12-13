import { Grid } from '@material-ui/core';
import React from 'react';

import { SparkLinear } from 'features/DesignDetailsPages/SparkDetailsPage/SparkLinear';
import { DesignContainerDiv } from 'features/SharedComponents/DesignDetailsElements';

export const SparkPanelFooter: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <Grid container={true} justify="center">
      <Grid item={true} xs={8} sm={6} md={4}>
        <DesignContainerDiv>
          <SparkLinear />
        </DesignContainerDiv>
      </Grid>
    </Grid>
  </Grid>
);
