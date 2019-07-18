import { Location } from '@reach/router';
import { HeaderGroup } from 'features/Header/components/HeaderGroup/HeaderGroupComponent';
import React from 'react';

export const Header: React.SFC = () => (
  <Location>
    {({ location: { pathname } }) => <HeaderGroup pathname={pathname} />}
  </Location>
);
