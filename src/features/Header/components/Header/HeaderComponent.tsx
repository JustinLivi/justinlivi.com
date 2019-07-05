import classNames from 'classnames/bind';
import React from 'react';

import { BrandComponent } from '../Brand/BrandComponent';
import { NavigationComponent } from '../Navigation/NavigationComponent';
import { TitleComponent } from '../Title/TitleComponent';
import styles from './HeaderComponent.module.scss';

const cx = classNames.bind(styles);

export interface HeaderComponentProps {
  title: string;
}

export const HeaderComponent: React.SFC<HeaderComponentProps> = ({ title }) => (
  <header>
    <BrandComponent />
    <TitleComponent title={title} />
    <NavigationComponent title={title} />
  </header>
);
