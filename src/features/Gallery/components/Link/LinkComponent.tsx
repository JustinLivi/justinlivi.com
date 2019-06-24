import React from 'react';

import { goToRoute } from '../../actions/goToRoute';

export interface LinkProps {
  tabIndex?: number;
  to: string;
  className?: string;
  role?: string;
  goToRoute: typeof goToRoute;
}

export const LinkComponent: React.SFC<LinkProps> = ({
  children,
  to,
  role = 'link',
  tabIndex = 0,
  className,
  goToRoute
}) => (
  <button
    tabIndex={tabIndex}
    role={role}
    onClick={e => {
      e.currentTarget.blur();
      goToRoute({ route: to });
    }}
    className={className}
  >
    {children}
  </button>
);
