import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

import { interactiveStyle } from 'styles/interactive';

const StyledLink = styled(Link)`
  float: left;
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 1.2rem;
  padding-bottom: 0.5rem;

  ${interactiveStyle}
`;

const BrandSpan = styled.span`
  letter-spacing: 0.3rem;
`;

export const Brand: React.FunctionComponent = () => (
  <nav>
    <StyledLink to="/">
      <BrandSpan>J</BrandSpan>L
    </StyledLink>
  </nav>
);
