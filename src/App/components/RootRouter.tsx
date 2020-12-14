import React from 'react';
import { Router } from '@reach/router';

import { BrinkbitDetailsPage } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitDetailsPage';
import { HitchdDetailsPage } from 'DesignDetailsPages/HitchdDetailsPage/HitchdDetailsPage';
import { SparkDetailsPage } from 'DesignDetailsPages/SparkDetailsPage/SparkDetailsPage';
import { CommunityDetailsPage } from 'GenerativeArtDetailsPages/CommunityDetailsPage';
import { WatercolorSedimentDetailsPage } from 'GenerativeArtDetailsPages/WatercolorSedimentDetailsPage';
import { ContactPage } from 'RootPages/components/ContactPage';
import { DesignPage } from 'RootPages/components/DesignPage';
import { GenerativeArtPage } from 'RootPages/components/GenerativeArtPage';
import { OpenSourcePage } from 'RootPages/components/OpenSourcePage';

export const RootRouter: React.FunctionComponent = () => (
  <Router>
    <ContactPage path="contact" />
    <OpenSourcePage path="open-source" />
    <DesignPage path="design" />
    <SparkDetailsPage path="design/spark" />
    <BrinkbitDetailsPage path="design/brinkbit" />
    <HitchdDetailsPage path="design/hitchd" />
    <GenerativeArtPage path="generative-art" />
    <CommunityDetailsPage path="generative-art/community" />
    <WatercolorSedimentDetailsPage path="generative-art/watercolor-sediment" />
  </Router>
);
