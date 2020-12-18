import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { WatercolorSedimentSeed0 } from 'justinlivi-generative-art/build/series/watercolor-sediment/sketches/seed0/WatercolorSedimentSeed0';
import { Helmet } from 'react-helmet';

import { useWindowSize } from '../hooks/useWindowSize';

const StyledSketch = styled(WatercolorSedimentSeed0)`
  width: calc((100vh - 200px) * (16 / 9));
  max-width: calc(100vw - 5rem);
  height: calc((100vw - 5rem) * (9 / 16));
  max-height: calc(100vh - 200px);
  margin-top: 30px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

export const WatercolorSedimentDetailsPage: React.FunctionComponent = () => {
  const { width, height } = useWindowSize();
  if (width === undefined || height === undefined) {
    return <></>;
  }
  const constrainedWidth = Math.min(width, 1920);
  const constrainedHeight = Math.floor(constrainedWidth * (9 / 16));
  return (
    <main>
      <Helmet>
        <title>Justin Livi - Watercolor Sediment Generative Art</title>
      </Helmet>
      <Grid container={true}>
        <StyledSketch width={constrainedWidth} height={constrainedHeight} />
      </Grid>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default WatercolorSedimentDetailsPage;
