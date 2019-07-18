import classNames from 'classnames/bind';
import { ContactLink } from 'features/RootPages/components/ContactLink/ContactLinkComponent';
import React from 'react';

import styles from './ContactPageStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactPageProps {
  path: string;
}

export const ContactPage: React.SFC<ContactPageProps> = () => (
  <ul className={cx('contactList')}>
    <ContactLink href='mailto:justin@brinkbit.com'>email</ContactLink>
    <ContactLink href='https://www.linkedin.com/in/justinlivi/'>
      linkedin
    </ContactLink>
    <ContactLink href='https://github.com/JustinLivi'>github</ContactLink>
    <ContactLink href='https://www.npmjs.com/~justinlivi'>npm</ContactLink>
    <ContactLink href='https://twitter.com/justinlivi'>twitter</ContactLink>
  </ul>
);
