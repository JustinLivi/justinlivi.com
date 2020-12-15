import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { CommunitySeed0 } from 'justinlivi-generative-art';

export interface CommunityDetailsPageProps {
  path: string;
}

const StyledSketch = styled(CommunitySeed0)`
  max-width: calc(100vw - 5rem);
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
