import classNames from 'classnames/bind';
import React from 'react';

import { NavigationComponent } from '../Navigation/NavigationComponent';
import { TitleComponent } from '../Title/TitleComponent';
import styles from './TitleGroupStyles.module.scss';

const cx = classNames.bind(styles);

export interface TitleGroupComponentProps {
  title: string;
  fixed: boolean;
  path: string[];
}

export const TitleGroupComponent: React.SFC<TitleGroupComponentProps> = ({
  title,
  fixed,
  path
}) => {
  return (
    <React.Fragment>
      <nav className={cx('sticky')}>
        <TitleComponent title={title} />
        <NavigationComponent path={path} fixed={fixed} />
      </nav>
    </React.Fragment>
  );
};
