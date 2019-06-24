import React from 'react';

import { BrandingComponent } from '../Branding/BrandingComponent';
import { ContactComponent } from '../Contact/ContactComponent';
import { ExperienceComponent } from '../Experience/ExperienceComponent';
import { HomeComponent } from '../Home/HomeComponent';
import { OpenSourceContainer } from '../OpenSource/OpenSourceContainer';

export interface PageRouterProps {
  route: string;
}

export const PageRouterComponent: React.SFC<PageRouterProps> = ({ route }) => {
  switch (route) {
    case 'home':
      return <HomeComponent />;
    case 'experience':
      return <ExperienceComponent />;
    case 'open-source':
      return <OpenSourceContainer />;
    case 'branding':
      return <BrandingComponent />;
    case 'contact':
      return <ContactComponent />;
    default:
      return <div>{route}</div>;
  }
};
