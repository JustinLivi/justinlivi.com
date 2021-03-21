import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from 'Header/components/Header';

// lazy load routes
const BrinkbitDetailsPage = React.lazy(() => import('DesignDetailsPages/BrinkbitDetailsPage/BrinkbitDetailsPage'));
const HitchdDetailsPage = React.lazy(() => import('DesignDetailsPages/HitchdDetailsPage/HitchdDetailsPage'));
const SparkDetailsPage = React.lazy(() => import('DesignDetailsPages/SparkDetailsPage/SparkDetailsPage'));
const CommunityDetailsPage = React.lazy(() => import('GenerativeArtDetailsPages/CommunityDetailsPage'));
const WatercolorSedimentDetailsPage = React.lazy(() =>
  import('GenerativeArtDetailsPages/WatercolorSedimentDetailsPage'),
);
const SpectrumGeneratorDetailsPage = React.lazy(() => import('GenerativeArtDetailsPages/SpectrumGeneratorDetailsPage'));
const AncientBeastsDetailsPage = React.lazy(() => import('GenerativeArtDetailsPages/AncientBeastsDetailsPage'));
const ContactPage = React.lazy(() => import('RootPages/components/ContactPage'));
const DesignPage = React.lazy(() => import('RootPages/components/DesignPage'));
const GenerativeArtPage = React.lazy(() => import('RootPages/components/GenerativeArtPage'));
const OpenSourcePage = React.lazy(() => import('RootPages/components/OpenSourcePage'));

const StyledMain = styled.main`
  padding: 2.5rem;
`;

export const RootRouter: React.FunctionComponent = () => (
  <Router>
    <Header />
    <Suspense fallback={<StyledMain>Loading...</StyledMain>}>
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/open-source">
          <OpenSourcePage />
        </Route>
        <Route path="/design/spark">
          <SparkDetailsPage />
        </Route>
        <Route path="/design/brinkbit">
          <BrinkbitDetailsPage />
        </Route>
        <Route path="/design/hitchd">
          <HitchdDetailsPage />
        </Route>
        <Route path="/design">
          <DesignPage />
        </Route>
        <Route path="/generative-art/community">
          <CommunityDetailsPage />
        </Route>
        <Route path="/generative-art/watercolor-sediment">
          <WatercolorSedimentDetailsPage />
        </Route>
        <Route path="/generative-art/spectrum-generator">
          <SpectrumGeneratorDetailsPage />
        </Route>
        <Route path="/generative-art/ancient-beasts">
          <AncientBeastsDetailsPage />
        </Route>
        <Route path="/generative-art">
          <GenerativeArtPage />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);
