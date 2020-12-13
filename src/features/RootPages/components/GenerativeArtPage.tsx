import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { CommunityThumb } from 'features/RootPages/components/thumbnails/CommunityThumb';
import { DesignCard } from 'features/RootPages/components/DesignCard';
import { WatercolorSedimentThumb } from 'features/RootPages/components/thumbnails/WatercolorSedimentThumb';

export interface GenerativeArtPageProps {
  path: string;
}

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const GenerativeArtPage: React.FunctionComponent<GenerativeArtPageProps> = () => (
  <StyledMain>
    <Grid container={true} spacing={3}>
      <DesignCard thumb={<CommunityThumb />} target="./community" title="community" />
      <DesignCard thumb={<WatercolorSedimentThumb />} target="./watercolor-sediment" title="watercolor sediment" />
    </Grid>
  </StyledMain>
);
