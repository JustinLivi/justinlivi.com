import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Brand } from 'Header/components/Brand';
import { TitleGroup } from 'Header/components/TitleGroup';
import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { ColorThemeToggle } from 'Header/components/ColorThemeToggle';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { usePrevious } from 'hooks/usePrevious';
import { scrollTopPosition } from 'styles/theme';

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
  'spectrum-generator': 'spectrum generator',
  'ancient-beasts': 'ancient beasts',
};

const mapRoute = (key: string) => {
  const value = routeMappings[key];
  return value ?? 'not found';
};

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

export const Header: React.FunctionComponent = () => {
  const { y: scrollY } = useScrollPosition();
  const { pathname } = useLocation();
  const previousPath = usePrevious(pathname);
  useEffect(() => {
    if (previousPath !== pathname && scrollY > scrollTopPosition) {
      window.scrollTo({
        top: scrollTopPosition,
      });
    }
  }, [previousPath, pathname, scrollY]);
  const path = pathname.split('/').slice(1);
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
        path={pathname === '/' ? [] : path.map(mapRoute)}
        fixed={pathname === '/'}
      />
    </>
  );
};
