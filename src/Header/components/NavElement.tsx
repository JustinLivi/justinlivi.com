import { Link } from 'react-router-dom';
import React from 'react';
import styled, { css } from 'styled-components';

import { interactiveStyle } from 'styles/interactive';
import { useDispatch } from 'react-redux';
import { breadcrumbsBlur, menuItemFocus } from 'Header/state/headerActions';

export interface NavElementProps {
  decorate: boolean;
  title: string;
  target: string;
}

const HighlightedCss = css`
  &::before {
    content: '-';
    margin-left: -1.15rem;
    margin-right: 0.5rem;
  }
`;

const StyledLi = styled.li<{ decorate: boolean }>`
  padding-top: 1rem;
  padding-left: 1.1rem;

  &:first-child {
    padding-top: 0.5rem;
  }

  a {
    font-size: 1rem;
    padding-bottom: 0.1rem;
    ${interactiveStyle}
  }

  ${({ decorate }) => (decorate ? HighlightedCss : undefined)}
`;

export const NavElement: React.FunctionComponent<NavElementProps> = ({ title, target, decorate }) => {
  const dispatch = useDispatch();
  return (
    <StyledLi decorate={decorate}>
      <Link
        onFocus={() => dispatch(menuItemFocus())}
        onBlur={() => dispatch(breadcrumbsBlur())}
        onClick={() => dispatch(breadcrumbsBlur())}
        to={target}
      >
        {title}
      </Link>
    </StyledLi>
  );
};
