import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { HitchdLinear } from 'DesignDetailsPages/HitchdDetailsPage/HitchdLinear';

const ContainerDiv = styled.div`
  padding-top: 25vh;
  padding-bottom: 20vh;
`;

export const HitchdPanelFooter: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <Grid container={true} justify="center">
      <Grid item={true} xs={10} sm={6} md={4}>
        <ContainerDiv>
          <HitchdLinear />
        </ContainerDiv>
      </Grid>
    </Grid>
  </Grid>
);
