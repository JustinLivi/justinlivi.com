import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';

import { BrinkbitThumb } from 'RootPages/components/thumbnails/BrinkbitThumb';
import { HitchdThumb } from 'RootPages/components/thumbnails/HitchdThumb';
import { SparkThumb } from 'RootPages/components/thumbnails/SparkThumb';

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const DesignPage: React.FunctionComponent = () => (
  <StyledMain>
    <Helmet>
      <title>Justin Livi - Design</title>
    </Helmet>
    <Grid container={true} spacing={3}>
      <BrinkbitThumb />
      <SparkThumb />
      <HitchdThumb />
    </Grid>
  </StyledMain>
);

// eslint-disable-next-line import/no-default-export
export default DesignPage;
