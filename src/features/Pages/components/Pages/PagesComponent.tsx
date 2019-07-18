import { Router } from '@reach/router';
import { Contact } from 'features/Pages/components/Contact/ContactComponent';
import { Design } from 'features/Pages/components/Design/DesignComponent';
import { OpenSource } from 'features/Pages/components/OpenSource/OpenSourceComponent';
import React from 'react';

export const Pages: React.SFC = () => (
  <main>
    <Router>
      <Contact path='contact' />
      <OpenSource path='open-source' />
      <Design path='design' />
    </Router>
  </main>
);
