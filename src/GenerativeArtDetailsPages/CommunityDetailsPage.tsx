import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { CommunitySeed0 } from 'justinlivi-generative-art/build/series/community/sketches/seed0/CommunitySeed0';

export interface CommunityDetailsPageProps {
  path: string;
}

const StyledSketch = styled(CommunitySeed0)`
  max-width: calc(100vw - 5rem);
  height: calc((100vw - 5rem) * (9 / 16));
  max-height: calc(100vh - 200px);
  margin-top: 30px;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

export const CommunityDetailsPage: React.FunctionComponent<CommunityDetailsPageProps> = () => (
  <main>
    <Grid container={true}>
      <StyledSketch />
    </Grid>
  </main>
);

// eslint-disable-next-line import/no-default-export
export default CommunityDetailsPage;
