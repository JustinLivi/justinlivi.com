import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import { SparkMarkComplex } from 'DesignDetailsPages/SparkDetailsPage/SparkMarkComplex';
import { SparkMarkSimple } from 'DesignDetailsPages/SparkDetailsPage/SparkMarkSimple';
import { SquareGrid } from 'SharedComponents/DesignDetailsElements';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

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
