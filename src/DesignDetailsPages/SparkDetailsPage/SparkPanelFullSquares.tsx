import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { SparkFullSquare } from 'DesignDetailsPages/SparkDetailsPage/SparkFullSquare';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

const SquareGrid = styled(Grid)`
  padding: 4%;
`;

const FullWidthGrid = styled(Grid)`
  background-color: ${color(ColorToken.sparkGreyPrimary)};
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const SparkPanelFullSquares: React.FunctionComponent = () => (
  <FullWidthGrid container={true} justify="center">
    <SquareGrid item={true} xs={10} sm={5} md={4}>
      <SparkFullSquare backgroundColorToken={ColorToken.sparkSecondary} />
    </SquareGrid>
    <SquareGrid item={true} xs={10} sm={5} md={4}>
      <SparkFullSquare backgroundColorToken={ColorToken.sparkGreySecondary} />
    </SquareGrid>
  </FullWidthGrid>
);
