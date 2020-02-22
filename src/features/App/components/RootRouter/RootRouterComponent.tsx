import { Router } from '@reach/router';
import {
  BrinkbitDetailsPage,
} from 'features/BrinkbitDetailsPage/components/BrinkbitDetailsPage/BrinkbitDetailsPageComponent';
import { CommunityDetailsPage } from 'features/CommunityDetailsPage/CommunityDetailsPage/CommunityDetailsPageComponent';
import { HitchdDetailsPage } from 'features/HitchdDetailsPage/components/HitchdDetailsPage/HitchdDetailsPageComponent';
import { ContactPage } from 'features/RootPages/components/ContactPage/ContactPageComponent';
import { DesignPage } from 'features/RootPages/components/DesignPage/DesignPageComponent';
import { GenerativeArtPage } from 'features/RootPages/components/GenerativeArtPage/GenerativeArtPageComponent';
import { OpenSourcePage } from 'features/RootPages/components/OpenSourcePage/OpenSourcePageComponent';
import { SparkDetailsPage } from 'features/SparkDetailsPage/components/SparkDetailsPage/SparkDetailsPageComponent';
import React from 'react';

export const RootRouter: React.SFC = () => (
  <Router>
    <ContactPage path="contact" />
    <OpenSourcePage path="open-source" />
    <DesignPage path="design" />
    <SparkDetailsPage path="design/spark" />
    <BrinkbitDetailsPage path="design/brinkbit" />
    <HitchdDetailsPage path="design/hitchd" />
    <GenerativeArtPage path="generative-art" />
    <CommunityDetailsPage path="generative-art/community" />
  </Router>
);
