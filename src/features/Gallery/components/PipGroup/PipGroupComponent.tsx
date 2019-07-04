import classNames from 'classnames/bind';
import React from 'react';

import { PipComponent } from '../Pip/PipComponent';
import styles from './PipGroupStyles.module.scss';

const cx = classNames.bind(styles);

export interface PipGroupProps {
  percent: number;
  routes: string[];
}

export const PipGroupComponent: React.SFC<PipGroupProps> = ({
  percent = 0,
  routes
}) => {
  const routeCount = routes.length;
  const adjusted = Math.round(percent);
  const mod = adjusted % routeCount;
  const index = mod < 0 ? mod + routeCount : mod;
  return (
    <div className={cx('pipGroup')}>
      {routes.map((route, i) => (
        <PipComponent
          link={`/${route}/`}
          key={route}
          percent={i === index ? 1.2 * (1.4 - Math.abs(percent - adjusted)) : 1}
        />
      ))}
    </div>
  );
};
