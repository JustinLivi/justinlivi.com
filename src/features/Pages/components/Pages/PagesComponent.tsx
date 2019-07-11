import { Router } from '@reach/router';
import React from 'react';

import { ContactComponent } from '../Contact/ContactComponent';
import { DesignComponent } from '../Design/DesignComponent';
import { HomeComponent } from '../Home/HomeComponent';
import { OpenSourceContainer } from '../OpenSource/OpenSourceContainer';

export const PagesComponent: React.SFC = () => (
  <main>
    <Router>
      <HomeComponent path='/' />
      <ContactComponent path='contact' />
      <OpenSourceContainer path='open-source' />
      <DesignComponent path='design' />
    </Router>
  </main>
);
