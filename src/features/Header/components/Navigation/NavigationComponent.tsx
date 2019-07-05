import classNames from 'classnames/bind';
import React from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import styles from './NavigationStyles.module.scss';

const cx = classNames.bind(styles);

export interface NavigationComponentProps {
  title: string;
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  title
}) => (
  <nav>
    <BreadCrumbsComponent title={title} />
    <ol className={cx('navList')}>
      <li className={cx('navElement')}>open source</li>
      <li className={cx('navElement')}>generative art</li>
      <li className={cx('navElement')}>design</li>
      <li className={cx('navElement')}>contact</li>
    </ol>
  </nav>
);
