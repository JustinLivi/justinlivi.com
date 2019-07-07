import classNames from 'classnames/bind';
import React from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import { NavElementComponent } from '../NavElement/NavElementComponent';
import styles from './NavigationStyles.module.scss';

const cx = classNames.bind(styles);

export interface NavigationComponentProps {
  path: string[];
}

export const NavigationComponent: React.SFC<NavigationComponentProps> = ({
  path
}) => (
  <nav>
    <BreadCrumbsComponent path={path} />
    <ul className={cx('navList')}>
      <NavElementComponent title='open source' target='/open-source' />
      <NavElementComponent title='generative art' target='/generative-art' />
      <NavElementComponent title='design' target='/design' />
      <NavElementComponent title='contact' target='/contact' />
    </ul>
  </nav>
);
