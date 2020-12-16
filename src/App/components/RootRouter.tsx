import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from 'Header/components/Header';

// lazy load routes
const BrinkbitDetailsPage = React.lazy(() => import('DesignDetailsPages/BrinkbitDetailsPage/BrinkbitDetailsPage'));
const HitchdDetailsPage = React.lazy(() => import('DesignDetailsPages/HitchdDetailsPage/HitchdDetailsPage'));
const SparkDetailsPage = React.lazy(() => import('DesignDetailsPages/SparkDetailsPage/SparkDetailsPage'));
const CommunityDetailsPage = React.lazy(() => import('GenerativeArtDetailsPages/CommunityDetailsPage'));
const WatercolorSedimentDetailsPage = React.lazy(() =>
  import('GenerativeArtDetailsPages/WatercolorSedimentDetailsPage'),
);
const ContactPage = React.lazy(() => import('RootPages/components/ContactPage'));
const DesignPage = React.lazy(() => import('RootPages/components/DesignPage'));
const GenerativeArtPage = React.lazy(() => import('RootPages/components/GenerativeArtPage'));
const OpenSourcePage = React.lazy(() => import('RootPages/components/OpenSourcePage'));

export const RootRouter: React.FunctionComponent = () => (
  <Router>
    <Header />
    <Suspense fallback={<main>Loading...</main>}>
      <Switch>
        <Route path="/contact">
          <ContactPage path="contact" />
        </Route>
        <Route path="/open-source">
          <OpenSourcePage path="open-source" />
        </Route>
        <Route path="/design/spark">
          <SparkDetailsPage path="design/spark" />
        </Route>
        <Route path="/design/brinkbit">
          <BrinkbitDetailsPage path="design/brinkbit" />
        </Route>
        <Route path="/design/hitchd">
          <HitchdDetailsPage path="design/hitchd" />
        </Route>
        <Route path="/design">
          <DesignPage path="design" />
        </Route>
        <Route path="/generative-art/community">
          <CommunityDetailsPage path="generative-art/community" />
        </Route>
        <Route path="/generative-art/watercolor-sediment">
          <WatercolorSedimentDetailsPage path="generative-art/watercolor-sediment" />
        </Route>
        <Route path="/generative-art">
          <GenerativeArtPage path="generative-art" />
        </Route>
      </Switch>
    </Suspense>
  </Router>
);
