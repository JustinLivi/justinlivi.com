import classNames from 'classnames/bind';
import React from 'react';

import styles from './SparkLogoStyles.module.scss';

const cx = classNames.bind(styles);

export interface SparkLogoProps {
  orangeClass?: string;
  yellowClass?: string;
  redClass?: string;
}

export const SparkLogo: React.SFC<SparkLogoProps> = ({
  orangeClass,
  yellowClass,
  redClass
}) => {
  const orange = orangeClass || cx('orange');
  const yellow = yellowClass || cx('yellow');
  const red = redClass || cx('red');
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 69.56 107.45'>
      <polygon
        className={orange}
        points='69.56 40.57 51.53 53.08 45.5 16.45 30.15 0 38.02 28.48 28.37 44 26.04 27.14 17.82 40.16 26.59 63.9 4.32 79.63 33.3 107.45 68.41 86.35 65.17 56.5 69.56 40.57'
      />
      <polygon
        className={orange}
        points='65.36 33.44 55.22 21.66 57.13 32.62 54.44 41.96 65.36 33.44'
      />
      <polygon
        className={orange}
        points='15.35 57.58 8.63 48.36 9.32 32.62 0 54.56 6.99 66.8 15.35 57.58'
      />
      <polygon
        className={orange}
        points='30.15 0 38.1 28.78 45.5 16.45 30.15 0'
      />
      <polygon
        className={orange}
        points='17.82 40.16 26.04 27.14 28.37 44 17.82 40.16'
      />
      <polygon
        className={orange}
        points='8.63 48.36 6.99 66.8 0 54.56 8.63 48.36'
      />
      <polygon
        className={orange}
        points='28.37 44 26.59 63.9 51.53 53.08 28.37 44'
      />
      <polygon
        className={orange}
        points='69.56 40.57 51.53 53.08 65.17 56.5 69.56 40.57'
      />
      <polygon
        className={orange}
        points='57.13 32.62 54.44 41.96 65.36 33.44 57.13 32.62'
      />
      <polygon
        className={orange}
        points='35.5 89.5 51.53 53.08 68.41 86.35 35.5 89.5'
      />
      <polygon
        className={orange}
        points='33.3 107.45 35.5 89.5 4.32 79.63 33.3 107.45'
      />
      <polygon
        className={yellow}
        points='26.59 63.9 4.32 79.63 35.5 89.5 26.59 63.9'
      />
      <polygon
        className={yellow}
        points='33.3 107.45 35.5 89.5 68.41 86.35 33.3 107.45'
      />
      <polygon
        className={yellow}
        points='65.17 56.5 51.53 53.08 68.41 86.35 65.17 56.5'
      />
      <polygon
        className={yellow}
        points='8.63 48.36 6.99 66.8 15.35 57.58 8.63 48.36'
      />
      <polygon
        className={red}
        points='17.82 40.16 26.59 63.9 28.37 44 17.82 40.16'
      />
      <polygon
        className={red}
        points='45.5 16.45 28.37 44 51.53 53.08 45.5 16.45'
      />
      <polygon
        className={red}
        points='55.22 21.66 57.13 32.62 65.36 33.44 55.22 21.66'
      />
      <polygon
        className={red}
        points='51.53 53.08 35.5 89.5 26.59 63.9 51.53 53.08'
      />
      <polygon
        className={red}
        points='8.63 48.36 0 54.56 9.32 32.62 8.63 48.36'
      />
    </svg>
  );
};
