import classNames from 'classnames/bind';
import React from 'react';

import styles from './PageLayoutStyles.module.scss';

const cx = classNames.bind(styles);

export interface PageLayoutProps {
  header: React.ReactNode;
  title: React.ReactNode;
  main: React.ReactNode;
}

export const PageLayoutComponent: React.SFC<PageLayoutProps> = ({
  header,
  main,
  title
}) => (
  <React.Fragment>
    {header}
    <div className={cx('spacer')} />
    <div className={cx('content')}>
      {title}
      <main>{main}</main>
    </div>
  </React.Fragment>
);
