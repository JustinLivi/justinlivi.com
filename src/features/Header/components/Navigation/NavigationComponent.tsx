import classNames from 'classnames/bind';
import React from 'react';

import { BreadCrumbsComponent } from '../BreadCrumbs/BreadCrumbsComponent';
import { NavElementComponent } from '../NavElement/NavElementComponent';
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
    <ul className={cx('navList')}>
      <NavElementComponent title='open source' target='/open-source' />
      <NavElementComponent title='generative art' target='/generative-art' />
      <NavElementComponent title='design' target='/design' />
      <NavElementComponent title='contact' target='/contact' />
    </ul>
  </nav>
);
