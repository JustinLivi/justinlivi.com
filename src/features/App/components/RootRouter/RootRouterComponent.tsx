import { Router } from '@reach/router';
import {
  DesignDetailsRouter,
} from 'features/DesignDetailsPages/components/DesignDetailsRouter/DesignDetailsRouterComponent';
import { ContactPage } from 'features/RootPages/components/ContactPage/ContactPageComponent';
import { DesignPage } from 'features/RootPages/components/DesignPage/DesignPageComponent';
import { OpenSourcePage } from 'features/RootPages/components/OpenSourcePage/OpenSourcePageComponent';
import React from 'react';

export const RootRouter: React.SFC = () => (
  <Router>
    <ContactPage path='contact' />
    <OpenSourcePage path='open-source' />
    <DesignPage path='design' />
    <DesignDetailsRouter path='design/*' />
  </Router>
);
