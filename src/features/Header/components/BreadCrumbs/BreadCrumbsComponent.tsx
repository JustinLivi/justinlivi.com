import classNames from 'classnames/bind';
import React from 'react';

import styles from './BreadCrumbsStyles.module.scss';

const cx = classNames.bind(styles);

export interface BreadCrumbsComponentProps {
  title: string;
}

export const BreadCrumbsComponent: React.SFC<BreadCrumbsComponentProps> = ({
  title
}) => (
  <nav>
    <ol className={cx('breadCrumbsList')}>
      <li className={cx('breadCrumbsElement')}>index</li>
      <li className={cx('breadCrumbsElement')}>{title}</li>
    </ol>
  </nav>
);
