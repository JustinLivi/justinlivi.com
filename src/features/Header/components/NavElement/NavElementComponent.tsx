import { Link } from '@reach/router';
import classNames from 'classnames/bind';
import React from 'react';

import styles from './NavElementStyles.module.scss';

const cx = classNames.bind(styles);

export interface NavElementComponentProps {
  title: string;
  target: string;
}

export const NavElementComponent: React.SFC<NavElementComponentProps> = ({
  title,
  target
}) => (
  <li className={cx('navElement')}>
    <Link to={target}>{title}</Link>
  </li>
);
