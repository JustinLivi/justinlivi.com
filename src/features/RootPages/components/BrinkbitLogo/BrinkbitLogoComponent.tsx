import classNames from 'classnames/bind';
import React from 'react';

import styles from './BrinkbitLogoStyles.module.scss';

const cx = classNames.bind(styles);

export interface BrinkbitLogoProps {
  blueClass?: string;
}

export const BrinkbitLogo: React.SFC<BrinkbitLogoProps> = ({ blueClass }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -5.69 53.81 83.12">
    <polygon
      className={blueClass || cx('blue')}
      // eslint-disable-next-line max-len
      points="17.94 17.94 17.94 0 0 0 0 71.75 35.88 71.75 35.88 53.81 17.94 53.81 17.94 35.88 35.88 35.88 35.88 53.81 53.81 53.81 53.81 17.94 17.94 17.94"
    />
  </svg>
);
