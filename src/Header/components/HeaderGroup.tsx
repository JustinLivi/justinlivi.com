import React, { useEffect } from 'react';
import styled from 'styled-components';
import { isNil, map } from 'lodash';

import { Brand } from 'Header/components/Brand';
import { TitleGroup } from 'Header/components/TitleGroup';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { ColorThemeToggle } from 'Header/components/ColorThemeToggle';

const routeMappings: { [key: string]: string } = {
  'open-source': 'open source',
  'generative-art': 'generative art',
  design: 'design',
  contact: 'contact',
  spark: 'spark',
  brinkbit: 'brinkbit',
  hitchd: 'hitchd',
  community: 'community',
  'watercolor-sediment': 'watercolor sediment',
};

const mapRoute = (key: string) => {
  const value = routeMappings[key];
  return isNil(value) ? 'not found' : value;
};

export interface HeaderGroupProps {
  pathname: string;
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  line-height: 1em;
  padding: 2.5rem;
  width: 100%;
  background-color: ${color(ColorToken.secondary)};
`;

const RightControls = styled.div`
  float: right;
`;

export const HeaderGroup: React.FunctionComponent<HeaderGroupProps> = ({ pathname }) => {
  const path = pathname.split('/').slice(1);
  useEffect(() => {
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 200);
  }, [pathname]);
  return (
    <>
      <StyledHeader>
        <Brand />
        <RightControls>
          <ColorThemeToggle />
        </RightControls>
      </StyledHeader>
      <TitleGroup
        title={pathname === '/' ? 'justin livi' : mapRoute(path[path.length - 1])}
        path={pathname === '/' ? [] : map(path, mapRoute)}
        fixed={pathname === '/'}
      />
    </>
  );
};
