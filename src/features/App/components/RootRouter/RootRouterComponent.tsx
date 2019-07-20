import { Router } from '@reach/router';
import {
  BrinkbitDetailsPage,
} from 'features/BrinkbitDetailsPage/components/BrinkbitDetailsPage/BrinkbitDetailsPageComponent';
import { ContactPage } from 'features/RootPages/components/ContactPage/ContactPageComponent';
import { DesignPage } from 'features/RootPages/components/DesignPage/DesignPageComponent';
import { OpenSourcePage } from 'features/RootPages/components/OpenSourcePage/OpenSourcePageComponent';
import { SparkDetailsPage } from 'features/SparkDetailsPage/components/SparkDetailsPage/SparkDetailsPageComponent';
import React from 'react';

export const RootRouter: React.SFC = () => (
  <Router>
    <ContactPage path='contact' />
    <OpenSourcePage path='open-source' />
    <DesignPage path='design' />
    <SparkDetailsPage path='design/spark' />
    <BrinkbitDetailsPage path='design/brinkbit' />
  </Router>
);
