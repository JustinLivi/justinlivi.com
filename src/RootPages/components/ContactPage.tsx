import React from 'react';
import styled from 'styled-components';

import { ContactLink } from 'RootPages/components/ContactLink';

export interface ContactPageProps {
  path: string;
}

const StyledMain = styled.main`
  padding: 2.5rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactPage: React.FunctionComponent<ContactPageProps> = () => (
  <StyledMain>
    <ContactList>
      <ContactLink href="mailto:justin@brinkbit.com" noTarget={true}>
        email
      </ContactLink>
      <ContactLink href="https://www.linkedin.com/in/justinlivi/">linkedin</ContactLink>
      <ContactLink href="https://github.com/JustinLivi">github</ContactLink>
      <ContactLink href="https://www.npmjs.com/~justinlivi">npm</ContactLink>
      <ContactLink href="https://twitter.com/justinlivi">twitter</ContactLink>
    </ContactList>
  </StyledMain>
);

// eslint-disable-next-line import/no-default-export
export default ContactPage;
