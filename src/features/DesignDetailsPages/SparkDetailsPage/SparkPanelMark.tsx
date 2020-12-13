import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { SparkMarkComplex } from 'features/DesignDetailsPages/SparkDetailsPage/SparkMarkComplex';
import { SparkMarkSimple } from 'features/DesignDetailsPages/SparkDetailsPage/SparkMarkSimple';
import { SquareGrid } from 'features/SharedComponents/DesignDetailsElements';
import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

const FullWidthGrid = styled(Grid)`
  background-color: ${color(ColorToken.sparkGreyTertiary)};
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

export const SparkPanelMark: React.FunctionComponent = () => (
  <FullWidthGrid container={true} justify="center">
    <SquareGrid xs={10} sm={3} md={3}>
      <SparkMarkSimple />
    </SquareGrid>
    <SquareGrid xs={10} sm={3} md={3}>
      <SparkMarkSimple inverted={true} />
    </SquareGrid>
    <SquareGrid xs={10} sm={3} md={3}>
      <SparkMarkComplex />
    </SquareGrid>
  </FullWidthGrid>
);
