import { Location } from '@reach/router';
import { HeaderGroup } from 'features/Header/components/HeaderGroupComponent';
import React from 'react';

export const Header: React.FunctionComponent = () => (
  <Location>{({ location: { pathname } }) => <HeaderGroup pathname={pathname} />}</Location>
);
