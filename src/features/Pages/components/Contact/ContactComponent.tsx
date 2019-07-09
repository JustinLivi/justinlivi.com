import classNames from 'classnames/bind';
import React from 'react';

import styles from './ContactStyles.module.scss';

const cx = classNames.bind(styles);

export interface ContactProps {
  path: string;
}

export const ContactComponent: React.SFC<ContactProps> = () => (
  <div className={cx('page')}>
    <ul className={cx('subheader')}>
      <li>
        <a href='mailto:justin@brinkbit.com'>email</a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/justinlivi/'
          target='_blank'
          rel='noopener noreferrer'
        >
          linkedin
        </a>
      </li>
      <li>
        <a
          href='https://github.com/JustinLivi'
          target='_blank'
          rel='noopener noreferrer'
        >
          github
        </a>
      </li>
      <li>
        <a
          href='https://www.npmjs.com/~justinlivi'
          target='_blank'
          rel='noopener noreferrer'
        >
          npm
        </a>
      </li>
      <li>
        <a
          href='https://twitter.com/justinlivi'
          target='_blank'
          rel='noopener noreferrer'
        >
          twitter
        </a>
      </li>
    </ul>
  </div>
);
