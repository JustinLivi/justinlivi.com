import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { BrinkbitThumb } from 'RootPages/components/thumbnails/BrinkbitThumb';
import { HitchdThumb } from 'RootPages/components/thumbnails/HitchdThumb';
import { SparkThumb } from 'RootPages/components/thumbnails/SparkThumb';

export interface DesignPageProps {
  path: string;
}

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const DesignPage: React.FunctionComponent<DesignPageProps> = () => (
  <StyledMain>
    <Grid container={true} spacing={3}>
      <BrinkbitThumb />
      <SparkThumb />
      <HitchdThumb />
    </Grid>
  </StyledMain>
);

// eslint-disable-next-line import/no-default-export
export default DesignPage;
