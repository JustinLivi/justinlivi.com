import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { BrinkbitFullSquare } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitFullSquare';
import { SquareGrid } from 'features/SharedComponents/DesignDetailsElements';
import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

const FullWidthGrid = styled(Grid)`
  background-color: ${color(ColorToken.brinkbitGreySecondary)};
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const BrinkbitPanelFullSquares: React.FunctionComponent = () => (
  <FullWidthGrid container={true} justify="center">
    <SquareGrid xs={10} sm={5} md={4}>
      <BrinkbitFullSquare backgroundColor={ColorToken.brinkbitSecondary} />
    </SquareGrid>
    <SquareGrid xs={10} sm={5} md={4}>
      <BrinkbitFullSquare backgroundColor={ColorToken.brinkbitPrimary} />
    </SquareGrid>
  </FullWidthGrid>
);
