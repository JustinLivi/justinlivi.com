import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import {
  BrinkbitLinear,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitLinearComponent';

const ContainerDiv = styled.div`
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

export const BrinkbitPanelFooter: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <Grid container={true} justify="center">
      <Grid item={true} xs={8} sm={6} md={4}>
        <ContainerDiv>
          <BrinkbitLinear />
        </ContainerDiv>
      </Grid>
    </Grid>
  </Grid>
);
