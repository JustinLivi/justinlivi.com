import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { AncientBeastsSeed0 } from 'justinlivi-generative-art/build/series/ancient-beasts/sketches/seed0/AncientBeastsSeed0';
import { Helmet } from 'react-helmet';

import { sketchStyle } from 'styles/sketch';
import { useWindowSize } from '../hooks/useWindowSize';

const StyledSketch = styled(AncientBeastsSeed0)`
  ${sketchStyle}
`;

export const AncientBeastsDetailsPage: React.FunctionComponent = () => {
  const { width, height } = useWindowSize();
  if (width === undefined || height === undefined) {
    return null;
  }
  const constrainedWidth = Math.min(width, 1920);
  const constrainedHeight = Math.floor(constrainedWidth * (9 / 16));
  return (
    <main>
      <Helmet>
        <title>Justin Livi - Ancient Beasts Generative Art</title>
      </Helmet>
      <Grid container={true}>
        <StyledSketch width={constrainedWidth} height={constrainedHeight} />
      </Grid>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default AncientBeastsDetailsPage;
