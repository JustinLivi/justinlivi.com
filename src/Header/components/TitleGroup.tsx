import React from 'react';
import styled from 'styled-components';

import { Navigation } from 'Header/components/Navigation';
import { Title } from 'Header/components/Title';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

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

export const TitleGroup: React.FunctionComponent<TitleGroupProps> = ({ title, fixed, path }) => (
  <>
    <StickyNav>
      <Title title={title} />
      <Navigation path={path} fixed={fixed} />
    </StickyNav>
  </>
);
