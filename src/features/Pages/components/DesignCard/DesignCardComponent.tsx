import { Grid } from '@material-ui/core';
import { Link } from '@reach/router';
import React, { ReactNode } from 'react';

export interface DesignProps {
  thumb: ReactNode;
  target: string;
  title: string;
}

export const DesignCard: React.SFC<DesignProps> = ({
  thumb,
  target,
  title
}) => (
  <Grid item xs={12} sm={6} lg={3}>
    {thumb}
    <p>
      <Link to={target}>{title}</Link>
    </p>
  </Grid>
);
