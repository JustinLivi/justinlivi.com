import React from 'react';
import styled from 'styled-components';

export interface ContactLinkProps {
  href: string;
  noTarget?: boolean;
}

const StyledLi = styled.li`
  line-height: 2rem;
`;

export const ContactLink: React.FunctionComponent<ContactLinkProps> = ({ href, noTarget, children }) => (
  <StyledLi>
    <a href={href} target={noTarget ? undefined : '_blank'} rel="noopener noreferrer">
      {children}
    </a>
  </StyledLi>
);

ContactLink.defaultProps = {
  noTarget: false,
};
