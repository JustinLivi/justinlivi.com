import classNames from 'classnames/bind';
import { ContactLink } from 'features/Pages/components/ContactLink/ContactLinkComponent';
import React from 'react';

import styles from './ContactStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactProps {
  path: string;
}

export const Contact: React.SFC<ContactProps> = () => (
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
