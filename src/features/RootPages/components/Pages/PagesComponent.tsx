import { Router } from '@reach/router';
import { ContactPage } from 'features/RootPages/components/ContactPage/ContactPageComponent';
import { DesignPage } from 'features/RootPages/components/DesignPage/DesignPageComponent';
import { OpenSourcePage } from 'features/RootPages/components/OpenSourcePage/OpenSourcePageComponent';
import React from 'react';

export const Pages: React.SFC = () => (
  <main>
    <Router>
      <ContactPage path='contact' />
      <OpenSourcePage path='open-source' />
      <DesignPage path='design' />
    </Router>
  </main>
);
