import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { ContactLink } from 'RootPages/components/ContactLink';

const StyledMain = styled.main`
  padding: 2.5rem;
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ContactPage: React.FunctionComponent = () => (
  <StyledMain>
    <Helmet>
      <title>Justin Livi - Contact</title>
    </Helmet>
    <ContactList>
      <ContactLink href="https://www.linkedin.com/in/justinlivi/">linkedin</ContactLink>
      <ContactLink href="https://github.com/JustinLivi">github</ContactLink>
      <ContactLink href="https://www.npmjs.com/~justinlivi">npm</ContactLink>
      <ContactLink href="https://twitter.com/justinlivi">twitter</ContactLink>
    </ContactList>
  </StyledMain>
);

// eslint-disable-next-line import/no-default-export
export default ContactPage;
