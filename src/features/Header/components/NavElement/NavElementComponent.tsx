import { Link } from '@reach/router';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './NavElementStyles.module.scss';

const cx = classNames.bind(styles);

export interface NavElementProps {
  title: string;
  target: string;
}

export const NavElement: React.SFC<NavElementProps> = ({ title, target }) => (
  <li className={cx('navElement')}>
    <Link to={target}>{title}</Link>
  </li>
);
