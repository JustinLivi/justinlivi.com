import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface ScrollMainProps {
  pathname: string;
}

const StyledMain = styled.main`
  padding-top: 10rem;
`;

const ScrollMain: React.FunctionComponent<ScrollMainProps> = ({ pathname, children }) => {
  const mainRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.setTimeout(() => {
      if (mainRef !== null && mainRef.current !== null) {
        mainRef.current.scrollTo({ behavior: 'smooth' });
      }
    }, 100);
  }, [pathname, mainRef]);
  return <StyledMain ref={mainRef}>{children}</StyledMain>;
};

export const Main: React.FunctionComponent = ({ children }) => {
  const { pathname } = useLocation();
  return <ScrollMain pathname={pathname}>{children}</ScrollMain>;
};
