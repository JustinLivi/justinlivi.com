import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { WatercolorSedimentSeed0 } from 'justinlivi-generative-art';

export interface WatercolorSedimentDetailsPageProps {
  path: string;
}

const StyledSketch = styled(WatercolorSedimentSeed0)`
  max-width: calc(100vw - 5rem);
  max-height: calc(100vh - 200px);
  margin-top: 30px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

export const WatercolorSedimentDetailsPage: React.SFC<WatercolorSedimentDetailsPageProps> = () => (
  <main>
    <Grid container={true}>
      <StyledSketch />
    </Grid>
  </main>
);

// eslint-disable-next-line import/no-default-export
export default WatercolorSedimentDetailsPage;
