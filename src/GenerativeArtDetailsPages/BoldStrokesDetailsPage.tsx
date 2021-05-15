import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { CommunitySeed1 } from 'justinlivi-generative-art/build/series/community/sketches/seed1/CommunitySeed1';
import { Helmet } from 'react-helmet';

import { sketchStyle } from 'styles/sketch';
import { useWindowSize } from '../hooks/useWindowSize';

const StyledSketch = styled(CommunitySeed1)`
  ${sketchStyle}
`;

export const BoldStrokesDetailsPage: React.FunctionComponent = () => {
  const { width, height } = useWindowSize();
  if (width === undefined || height === undefined) {
    return <></>;
  }
  const constrainedWidth = Math.min(width, 1920);
  const constrainedHeight = Math.floor(constrainedWidth * (9 / 16));
  return (
    <main>
      <Helmet>
        <title>Justin Livi - Bold Strokes Generative Art</title>
      </Helmet>
      <Grid container={true}>
        <StyledSketch width={constrainedWidth} height={constrainedHeight} />
      </Grid>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default BoldStrokesDetailsPage;
