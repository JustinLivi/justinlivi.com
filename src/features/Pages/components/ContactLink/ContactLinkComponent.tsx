import classNames from 'classnames/bind';
import React from 'react';

import styles from './ContactLinkStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactLinkProps {
  href: string;
}

export const ContactLinkComponent: React.SFC<ContactLinkProps> = ({
  href,
  children
}) => (
  <li className={cx('contactListItem')}>
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
    </a>
  </li>
);
