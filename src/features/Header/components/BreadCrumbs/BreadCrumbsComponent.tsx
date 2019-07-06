import classNames from 'classnames/bind';
import React from 'react';

import styles from './BreadCrumbsStyles.module.scss';

const cx = classNames.bind(styles);

export interface BreadCrumbsComponentProps {
  path: string[];
}

export const BreadCrumbsComponent: React.SFC<BreadCrumbsComponentProps> = ({
  path
}) => (
  <button className={cx('breadCrumbs')} disabled={path.length === 0}>
    <ol className={cx('breadCrumbsList')}>
      {path.length === 0 ? (
        <li className={cx('breadCrumbsElement')} />
      ) : (
        path.map((node, i) => (
          <li className={cx('breadCrumbsElement')} key={i}>
            {node}
          </li>
        ))
      )}
    </ol>
  </button>
);
