import React from 'react';

export interface NavProps {
  tabIndex?: number;
  to: string;
  className?: string;
  role?: string;
  goToRoute: (to: string) => void;
}

const Nav: React.SFC<NavProps> = ({
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
      goToRoute(to);
    }}
    className={className}
  >
    {children}
  </button>
);

export default Nav;
