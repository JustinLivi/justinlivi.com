import React from 'react';
import styled from 'styled-components';

import { Navigation } from 'features/Header/components/NavigationComponent';
import { Title } from 'features/Header/components/TitleComponent';
import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

export interface TitleGroupProps {
  title: string;
  fixed: boolean;
  path: string[];
}

const StickyNav = styled.nav`
  position: sticky;
  top: 5rem;
  margin-top: 10rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  background-color: ${color(ColorToken.secondary)};
`;

export const TitleGroup: React.SFC<TitleGroupProps> = ({ title, fixed, path }) => (
  <>
    <StickyNav>
      <Title title={title} />
      <Navigation path={path} fixed={fixed} />
    </StickyNav>
  </>
);
