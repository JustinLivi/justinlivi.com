import classNames from 'classnames/bind';
import React from 'react';

import styles from './ContactLinkStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactLinkProps {
  href: string;
  noTarget?: boolean;
}

export const ContactLink: React.SFC<ContactLinkProps> = ({
  href,
  noTarget,
  children
}) => (
  <li className={cx('contactListItem')}>
    <a
      href={href}
      target={noTarget ? undefined : '_blank'}
      rel='noopener noreferrer'
    >
      {children}
    </a>
  </li>
);
