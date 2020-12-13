import React from 'react';
import { Router } from '@reach/router';

import { BrinkbitDetailsPage } from 'features/DesignDetailsPages/BrinkbitDetailsPage/BrinkbitDetailsPage';
import { HitchdDetailsPage } from 'features/DesignDetailsPages/HitchdDetailsPage/components/HitchdDetailsPageComponent';
import { SparkDetailsPage } from 'features/DesignDetailsPages/SparkDetailsPage/SparkDetailsPage';
import { CommunityDetailsPage } from 'features/GenerativeArtDetailsPages/CommunityDetailsPage';
import { WatercolorSedimentDetailsPage } from 'features/GenerativeArtDetailsPages/WatercolorSedimentDetailsPage';
import { ContactPage } from 'features/RootPages/components/ContactPage/ContactPageComponent';
import { DesignPage } from 'features/RootPages/components/DesignPage/DesignPageComponent';
import { GenerativeArtPage } from 'features/RootPages/components/GenerativeArtPage/GenerativeArtPageComponent';
import { OpenSourcePage } from 'features/RootPages/components/OpenSourcePage/OpenSourcePageComponent';

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
