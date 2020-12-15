import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import { interactiveStyle } from 'styles/interactive';
import { useDispatch } from 'react-redux';
import { breadcrumbsBlur, menuItemFocus } from 'Header/state/headerActions';

export interface NavElementProps {
  title: string;
  target: string;
}

const StyledLi = styled.li`
  padding-top: 1rem;
  padding-left: 1.1rem;

  &:first-child {
    padding-top: 0.5rem;
  }

  a {
    padding-bottom: 0.1rem;
    ${interactiveStyle}
  }
`;

export const NavElement: React.FunctionComponent<NavElementProps> = ({ title, target }) => {
  const dispatch = useDispatch();
  return (
    <StyledLi>
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
