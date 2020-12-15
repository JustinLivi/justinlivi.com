import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { CommunityThumb } from 'RootPages/components/thumbnails/CommunityThumb';
import { WatercolorSedimentThumb } from 'RootPages/components/thumbnails/WatercolorSedimentThumb';

export interface GenerativeArtPageProps {
  path: string;
}

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const GenerativeArtPage: React.FunctionComponent<GenerativeArtPageProps> = () => (
  <StyledMain>
    <Grid container={true} spacing={3}>
      <CommunityThumb />
      <WatercolorSedimentThumb />
    </Grid>
  </StyledMain>
);