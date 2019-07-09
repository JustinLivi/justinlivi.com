import React, { useState } from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import { NavListComponent } from '../NavList/NavListComponent';

export interface NavigationComponentProps {
  path: string[];
  expanded: boolean;
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  path,
  expanded = false
}) => {
  const [expandedState, setExpandedState] = useState(expanded);
  return (
    <nav>
      <BreadCrumbsComponent
        path={path}
        onClick={() => setExpandedState(true)}
        onBlur={() => setExpandedState(false)}
      />
      <NavListComponent expanded={expanded || expandedState} />
    </nav>
  );
};
