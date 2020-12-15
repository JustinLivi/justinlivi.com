import React, { useEffect, useRef, useState } from 'react';
import { filter, map } from 'lodash';
import useBoundingClientRect from '@rooks/use-boundingclientrect';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { NavElement } from 'Header/components/NavElement';
import { useScrollPosition } from 'Header/hooks/useScrollPosition';
import { headerExpandedSelector } from 'Header/state/headerSelectors';
import { color, themeTransition } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { scrollTopPosition } from 'styles/theme';
import { usePrevious } from 'Header/hooks/usePrevious';

const rootPaths = [
  {
    title: 'open source',
    target: '/open-source',
  },
  {
    title: 'generative art',
    target: '/generative-art',
  },
  {
    title: 'design',
    target: '/design',
  },
  {
    title: 'contact',
    target: '/contact',
  },
];

export interface NavListProps {
  fixed: boolean;
  path: string[];
}

export interface NavListStyleProps {
  expandedHeight: number;
  scrollY: number;
  fixed: boolean;
  expanded: boolean;
}

const ExpandableDiv = styled.div<NavListStyleProps>`
  transition: height 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95), ${themeTransition};
  overflow: hidden;
  background-color: ${color(ColorToken.secondary)};
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  padding-bottom: 0.5rem;

  ul {
    width: 100%;
    line-height: 1rem;
    padding: 0;
    list-style-type: none;
    margin: 0;
    font-size: 1rem;
  }

  height: ${({ expandedHeight, expanded, fixed }) => {
    if (fixed || expandedHeight === -1) return 'initial';
    if (expanded) return `calc(${expandedHeight}px + 1rem)`;
    return 0;
  }};

  visibility: ${({ expandedHeight, fixed }) => {
    if (fixed) return 'initial';
    if (expandedHeight === -1) return 'hidden';
    return 'initial';
  }};
`;

const ShadowDiv = styled.div<NavListStyleProps>`
  height: 1rem;
  background-color: ${color(ColorToken.secondary)};

  box-shadow: ${({ fixed, expanded, scrollY }) =>
    `0rem 0rem 0.5rem 0rem rgba(0, 0, 0, ${(() => {
      if (fixed) return 0;
      if (expanded) return 0.3;
      return Math.min(Math.max(scrollY - scrollTopPosition, 0) / 100, 0.3);
    })()})`};
`;

const StyledNav = styled.nav`
  position: absolute;
  left: 0;
  width: 100%;
`;

const FooterDiv = styled.div`
  overflow: hidden;
  height: 1.5rem;
`;

export const NavList: React.FunctionComponent<NavListProps> = ({ path, fixed }) => {
  const ulRef = useRef<HTMLUListElement>(null);
  const [transitioning, setTransitionState] = useState(false);
  const expanded = useSelector(headerExpandedSelector);
  const expandedPrev = usePrevious(expanded);
  const ulBounds = useBoundingClientRect(ulRef);
  const expandedHeight = ulBounds?.height ?? -1;
  const { y: scrollY } = useScrollPosition();
  useEffect(() => {
    if (expanded !== expandedPrev) {
      setTransitionState(true);
    }
  }, [expanded, transitioning]);
  return (
    <StyledNav>
      <ExpandableDiv
        onTransitionEnd={() => {
          setTransitionState(false);
        }}
        expandedHeight={expandedHeight}
        expanded={expanded}
        fixed={fixed}
        scrollY={scrollY}
      >
        <ul ref={ulRef}>
          {expanded || transitioning
            ? map(
                path.length === 1 ? filter(rootPaths, ({ title }) => title !== path[0]) : rootPaths,
                ({ title, target }) => <NavElement key={target} title={title} target={target} />,
              )
            : undefined}
        </ul>
      </ExpandableDiv>
      <FooterDiv>
        <ShadowDiv expandedHeight={expandedHeight} expanded={expanded} fixed={fixed} scrollY={scrollY} />
      </FooterDiv>
    </StyledNav>
  );
};