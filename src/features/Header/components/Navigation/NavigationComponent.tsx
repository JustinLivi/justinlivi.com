import React, { useState } from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import { NavListComponent } from '../NavList/NavListComponent';

export interface NavigationComponentProps {
  path: string[];
  fixed: boolean;
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  path,
  fixed = false
}) => {
  const [expandedState, setExpandedState] = useState(fixed);
  return (
    <nav>
      <BreadCrumbsComponent
        path={path}
        onClick={() => setExpandedState(true)}
        // onBlur={() => setExpandedState(false)}
        onBlur={() => {}}
      />
      <NavListComponent fixed={fixed} expanded={expandedState} />
    </nav>
  );
};
