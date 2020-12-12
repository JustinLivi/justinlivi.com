import { Grid } from '@material-ui/core';
import {
  BrinkbitFullSquare,
} from 'features/DesignDetailsPages/BrinkbitDetailsPage/components/BrinkbitFullSquareComponent';
import React from 'react';
import styled from 'styled-components';

const FullWidthGrid = styled(Grid)`
  background-color: #bfced6;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const SquareGrid = styled(Grid)`
  padding: 4%;
`;

export const BrinkbitPanelFullSquares: React.FunctionComponent = () => (
  <FullWidthGrid container={true} justify="center">
    <SquareGrid item={true} xs={10} sm={5} md={4}>
      <BrinkbitFullSquare backgroundColor="white" />
    </SquareGrid>
    <SquareGrid item={true} xs={10} sm={5} md={4}>
      <BrinkbitFullSquare backgroundColor="#050f17" />
    </SquareGrid>
  </FullWidthGrid>
);
