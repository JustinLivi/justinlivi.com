import { Link } from '@reach/router';
import React from 'react';
import styled from 'styled-components';

import { interactiveStyle } from 'styles/interactive';

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

export const NavElement: React.FunctionComponent<NavElementProps> = ({ title, target }) => (
  <StyledLi>
    <Link to={target}>{title}</Link>
  </StyledLi>
);
