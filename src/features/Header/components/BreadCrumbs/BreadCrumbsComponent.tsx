import classNames from 'classnames/bind';
import React, { FocusEventHandler, MouseEventHandler } from 'react';

import styles from './BreadCrumbsStyles.module.scss';

const cx = classNames.bind(styles);

export interface BreadCrumbsProps {
  path: string[];
  onClick: MouseEventHandler<HTMLButtonElement>;
  onBlur: FocusEventHandler<HTMLButtonElement>;
}

export const BreadCrumbs: React.SFC<BreadCrumbsProps> = ({
  path,
  onClick,
  onBlur
}) => (
  <button
    className={cx('breadCrumbs')}
    disabled={path.length === 0}
    onClick={onClick}
    onBlur={onBlur}
  >
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
