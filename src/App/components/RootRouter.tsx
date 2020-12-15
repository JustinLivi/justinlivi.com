import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BrinkbitDetailsPage } from 'DesignDetailsPages/BrinkbitDetailsPage/BrinkbitDetailsPage';
import { HitchdDetailsPage } from 'DesignDetailsPages/HitchdDetailsPage/HitchdDetailsPage';
import { SparkDetailsPage } from 'DesignDetailsPages/SparkDetailsPage/SparkDetailsPage';
import { CommunityDetailsPage } from 'GenerativeArtDetailsPages/CommunityDetailsPage';
import { WatercolorSedimentDetailsPage } from 'GenerativeArtDetailsPages/WatercolorSedimentDetailsPage';
import { ContactPage } from 'RootPages/components/ContactPage';
import { DesignPage } from 'RootPages/components/DesignPage';
import { GenerativeArtPage } from 'RootPages/components/GenerativeArtPage';
import { OpenSourcePage } from 'RootPages/components/OpenSourcePage';
import { Header } from 'Header/components/Header';

export const RootRouter: React.FunctionComponent = () => (
  <Router>
    <Header />
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
  </Router>
);
