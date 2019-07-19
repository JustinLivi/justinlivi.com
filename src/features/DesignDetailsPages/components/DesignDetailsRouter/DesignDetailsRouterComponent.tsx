import { Router } from '@reach/router';
import { SparkDetailsPage } from 'features/DesignDetailsPages/components/SparkDetailsPage/SparkDetailsPageComponent';
import React from 'react';

export interface DesignDetailsRouterProps {
  path: string;
}

export const DesignDetailsRouter: React.SFC<DesignDetailsRouterProps> = () => (
  <Router>
    <SparkDetailsPage path='spark' />
  </Router>
);
