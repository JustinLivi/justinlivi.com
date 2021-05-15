import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import { CommunityThumb } from 'RootPages/components/thumbnails/CommunityThumb';
import { WatercolorSedimentThumb } from 'RootPages/components/thumbnails/WatercolorSedimentThumb';
import { SpectrumGeneratorThumb } from 'RootPages/components/thumbnails/SpectrumGeneratorThumb';
import { AncientBeastsThumb } from 'RootPages/components/thumbnails/AncientBeastsThumb';
import { BoldStrokesThumb } from 'RootPages/components/thumbnails/BoldStrokesThumb';

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const GenerativeArtPage: React.FunctionComponent = () => (
  <StyledMain>
    <Helmet>
      <title>Justin Livi - Generative Art</title>
    </Helmet>
    <Grid container={true} spacing={3}>
      <CommunityThumb />
      <WatercolorSedimentThumb />
      <SpectrumGeneratorThumb />
      <AncientBeastsThumb />
      <BoldStrokesThumb />
    </Grid>
  </StyledMain>
);

// eslint-disable-next-line import/no-default-export
export default GenerativeArtPage;
