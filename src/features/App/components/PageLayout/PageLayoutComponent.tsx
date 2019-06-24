import classNames from 'classnames';
import React from 'react';

import styles from './PageLayoutStyles.scss';

const cx = classNames.bind(styles);

export interface PageLayoutProps {
  nav: React.ReactNode;
  main: React.ReactNode;
}

export const PageLayoutComponent: React.SFC<PageLayoutProps> = ({
  nav,
  main
}) => (
  <div className={cx('container')}>
    {nav}
    <main>{main}</main>
  </div>
);
