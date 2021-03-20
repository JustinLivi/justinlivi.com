import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { HitchdFullSquare } from 'DesignDetailsPages/HitchdDetailsPage/HitchdFullSquare';
import { SquareGrid } from 'SharedComponents/DesignDetailsElements';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

const FullWidthGrid = styled(Grid)`
  background-color: ${color(ColorToken.hitchdGreyPrimary)};
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const HitchdPanelFullSquares: React.FunctionComponent = () => (
  <FullWidthGrid container={true} justify="center">
    <SquareGrid xs={10} sm={5} md={4}>
      <HitchdFullSquare />
    </SquareGrid>
    <SquareGrid xs={10} sm={5} md={4}>
      <HitchdFullSquare inverted={true} />
    </SquareGrid>
  </FullWidthGrid>
);
