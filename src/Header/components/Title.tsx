import React from 'react';
import styled from 'styled-components';

export interface TitleProps {
  title: string;
}

const StyledH1 = styled.h1`
  line-height: 2.3rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Title: React.FunctionComponent<TitleProps> = ({ title }) => <StyledH1>{title}</StyledH1>;
