import { Router } from '@reach/router';
import { ContactComponent } from 'features/Pages/components/Contact/ContactComponent';
import { DesignComponent } from 'features/Pages/components/Design/DesignComponent';
import { HomeComponent } from 'features/Pages/components/Home/HomeComponent';
import { OpenSourceComponent } from 'features/Pages/components/OpenSource/OpenSourceComponent';
import React from 'react';

export const PagesComponent: React.SFC = () => (
  <main>
    <Router>
      <HomeComponent path='/' />
      <ContactComponent path='contact' />
      <OpenSourceComponent path='open-source' />
      <DesignComponent path='design' />
    </Router>
  </main>
);
