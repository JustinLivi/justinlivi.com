import React from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import { NavListComponent } from '../NavList/NavListComponent';

export interface NavigationComponentProps {
  path: string[];
  fixed: boolean;
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  path,
  fixed = false
}) => (
  <nav>
    <BreadCrumbsComponent
      path={path}
      // onClick={() => setExpandedState(true)}
      // onBlur={() => setExpandedState(false)}
      onClick={() => {}}
      onBlur={() => {}}
    />
    <NavListComponent fixed={fixed} expanded />
  </nav>
);
