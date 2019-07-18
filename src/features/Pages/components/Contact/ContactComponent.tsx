import classNames from 'classnames/bind';
import { ContactLinkComponent } from 'features/Pages/components/ContactLink/ContactLinkComponent';
import React from 'react';

import styles from './ContactStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactProps {
  path: string;
}

export const ContactComponent: React.SFC<ContactProps> = () => (
  <ul className={cx('contactList')}>
    <ContactLinkComponent href='mailto:justin@brinkbit.com'>
      email
    </ContactLinkComponent>
    <ContactLinkComponent href='https://www.linkedin.com/in/justinlivi/'>
      linkedin
    </ContactLinkComponent>
    <ContactLinkComponent href='https://github.com/JustinLivi'>
      github
    </ContactLinkComponent>
    <ContactLinkComponent href='https://www.npmjs.com/~justinlivi'>
      npm
    </ContactLinkComponent>
    <ContactLinkComponent href='https://twitter.com/justinlivi'>
      twitter
    </ContactLinkComponent>
  </ul>
);
