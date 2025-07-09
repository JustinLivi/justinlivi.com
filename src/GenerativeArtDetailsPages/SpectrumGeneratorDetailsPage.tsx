import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { SpectrumGeneratorSeed0 } from 'justinlivi-generative-art/build/series/spectrum-generator/sketches/seed0/SpectrumGeneratorSeed0';
import { Helmet } from 'react-helmet';

import { sketchStyle } from 'styles/sketch';
import { useWindowSize } from '../hooks/useWindowSize';

const StyledSketch = styled(SpectrumGeneratorSeed0)`
  ${sketchStyle}
`;

export const SpectrumGeneratorDetailsPage: React.FunctionComponent = () => {
  const { width, height } = useWindowSize();
  if (width === undefined || height === undefined) {
    return null;
  }
  const constrainedWidth = Math.min(width, 1920);
  const constrainedHeight = Math.floor(constrainedWidth * (9 / 16));
  return (
    <main>
      <Helmet>
        <title>Justin Livi - Spectrum Generator Generative Art</title>
      </Helmet>
      <Grid container={true}>
        <StyledSketch width={constrainedWidth} height={constrainedHeight} />
      </Grid>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default SpectrumGeneratorDetailsPage;
