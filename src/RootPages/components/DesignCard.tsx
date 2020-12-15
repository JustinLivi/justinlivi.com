import React, { ReactNode } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export interface DesignProps {
  thumb: ReactNode;
  target: string;
  title: string;
}

export const DesignCard: React.FunctionComponent<DesignProps> = ({ thumb, target, title }) => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <Link to={target}>{thumb}</Link>
    <p>
      <Link to={target}>{title}</Link>
    </p>
  </Grid>
);
