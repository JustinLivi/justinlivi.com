import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import { BrinkbitBluePolygon } from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitStyledSvgElements';

const ContainerDiv = styled(Grid)`
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

export const BrinkbitPanelHeader = () => (
  <Grid container={true} justify='center'>
    <Grid item={true} xs={3} sm={2} md={1}>
      <ContainerDiv>
        <svg viewBox='0 0 36.06 48.08'>
          <BrinkbitBluePolygon
            points='12.02 12.02 12.02 0 0 0 0 48.08 24.04 48.08 24.04 36.06 12.02 36.06 12.02 24.04 24.04 24.04 24.04 36.06 36.06 36.06 36.06 12.02 12.02 12.02'
          />
        </svg>
      </ContainerDiv>
    </Grid>
  </Grid>
);
