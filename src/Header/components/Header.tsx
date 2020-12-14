import { Location } from '@reach/router';
import { HeaderGroup } from 'Header/components/HeaderGroup';
import React from 'react';

export const Header: React.FunctionComponent = () => (
  <Location>{({ location: { pathname } }) => <HeaderGroup pathname={pathname} />}</Location>
);
