import classNames from 'classnames/bind';
import React from 'react';

import styles from './style.scss';

const cx = classNames.bind(styles);

const Home = () => (
  <div className={cx('page')}>
    <h1>BRANDING</h1>
    <div className={cx('container', 'brinkbit-logo')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 53.81 71.75'>
        <polygon
          className={cx('logo', 'brinkbit-logo-blue')}
          points='17.94 17.94 17.94 0 0 0 0 71.75 35.88 71.75 35.88 53.81 17.94 53.81 17.94 35.88 35.88 35.88 35.88 53.81 53.81 53.81 53.81 17.94 17.94 17.94'
        />
      </svg>
    </div>
    <div className={cx('container', 'spark-logo')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 69.56 107.45'>
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='69.56 40.57 51.53 53.08 45.5 16.45 30.15 0 38.02 28.48 28.37 44 26.04 27.14 17.82 40.16 26.59 63.9 4.32 79.63 33.3 107.45 68.41 86.35 65.17 56.5 69.56 40.57'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='65.36 33.44 55.22 21.66 57.13 32.62 54.44 41.96 65.36 33.44'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='15.35 57.58 8.63 48.36 9.32 32.62 0 54.56 6.99 66.8 15.35 57.58'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='30.15 0 38.1 28.78 45.5 16.45 30.15 0'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='17.82 40.16 26.04 27.14 28.37 44 17.82 40.16'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='8.63 48.36 6.99 66.8 0 54.56 8.63 48.36'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='28.37 44 26.59 63.9 51.53 53.08 28.37 44'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='69.56 40.57 51.53 53.08 65.17 56.5 69.56 40.57'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='57.13 32.62 54.44 41.96 65.36 33.44 57.13 32.62'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='35.5 89.5 51.53 53.08 68.41 86.35 35.5 89.5'
        />
        <polygon
          className={cx('logo', 'spark-logo-orange')}
          points='33.3 107.45 35.5 89.5 4.32 79.63 33.3 107.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='26.59 63.9 4.32 79.63 35.5 89.5 26.59 63.9'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='33.3 107.45 35.5 89.5 68.41 86.35 33.3 107.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='65.17 56.5 51.53 53.08 68.41 86.35 65.17 56.5'
        />
        <polygon
          className={cx('logo', 'spark-logo-yellow')}
          points='8.63 48.36 6.99 66.8 15.35 57.58 8.63 48.36'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='17.82 40.16 26.59 63.9 28.37 44 17.82 40.16'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='45.5 16.45 28.37 44 51.53 53.08 45.5 16.45'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='55.22 21.66 57.13 32.62 65.36 33.44 55.22 21.66'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='51.53 53.08 35.5 89.5 26.59 63.9 51.53 53.08'
        />
        <polygon
          className={cx('logo', 'spark-logo-red')}
          points='8.63 48.36 0 54.56 9.32 32.62 8.63 48.36'
        />
      </svg>
    </div>
    <div className={cx('container', 'pf-logo')}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75.52 75.49'>
        <rect
          className={cx('logo', 'pf-yellow-bright')}
          x='2.27'
          y='15.89'
          width='30.93'
          height='19.73'
          rx='1.24'
          ry='1.24'
          transform='translate(-8.89 9.35) rotate(-23.8)'
        />
        <path
          className={cx('logo', 'pf-yellow-dark')}
          d='M11.32,26.11,4.15,33.28,7.07,39.9a1.24,1.24,0,0,0,1.63.63l12-5.29Z'
        />
        <rect
          className={cx('logo', 'pf-red-bright')}
          x='-0.36'
          y='33.51'
          width='30.93'
          height='19.73'
          rx='1.24'
          ry='1.24'
          transform='translate(-30.8 41.78) rotate(-68.8)'
        />
        <path
          className={cx('logo', 'pf-red-dark')}
          d='M11.09,47.4,3.16,55.33l14.41,5.59a1.24,1.24,0,0,0,1.6-.7l1.33-3.42Z'
        />
        <rect
          className={cx('logo', 'pf-blue-bright')}
          x='15.86'
          y='42.28'
          width='19.73'
          height='30.93'
          rx='1.24'
          ry='1.24'
          transform='translate(-21.12 15.29) rotate(-23.8)'
        />
        <path
          className={cx('logo', 'pf-blue-dark')}
          d='M40.5,66.78,32.62,48.93l-.81-1.81L18,64.56l4.49,10.19a1.24,1.24,0,0,0,1.63.63l15.8-7A1.24,1.24,0,0,0,40.5,66.78Z'
        />
        <rect
          className={cx('logo', 'pf-red-bright')}
          x='33.58'
          y='44.91'
          width='19.73'
          height='30.93'
          rx='1.24'
          ry='1.24'
          transform='translate(-28.55 79.05) rotate(-68.8)'
        />
        <path
          className={cx('logo', 'pf-red-dark')}
          d='M38.59,69.07l14.56,5.65a1.24,1.24,0,0,0,1.6-.7L61,57.92a1.24,1.24,0,0,0-.7-1.6L43,49.63l-2.94-1.11Z'
        />
        <rect
          className={cx('logo', 'pf-blue-bright')}
          x='42.32'
          y='39.86'
          width='30.93'
          height='19.73'
          rx='1.24'
          ry='1.24'
          transform='matrix(0.91, -0.4, 0.4, 0.91, -15.15, 27.55)'
        />
        <path
          className={cx('logo', 'pf-blue-dark')}
          d='M69.1,37.07l-.6-1.37H65.14l-15.55,8L48,64.57a1.23,1.23,0,0,0,.76-.08l20.36-9Z'
        />
        <rect
          className={cx('logo', 'pf-yellow-bright')}
          x='44.95'
          y='22.24'
          width='30.93'
          height='19.73'
          rx='1.24'
          ry='1.24'
          transform='translate(8.63 76.82) rotate(-68.8)'
        />
        <path
          className={cx('logo', 'pf-yellow-dark')}
          d='M64.48,27.91,53.84,21.77l-7.77,20a1.24,1.24,0,0,0,.7,1.6l7.09,2.75Z'
        />
        <rect
          className={cx('logo', 'pf-red-bright')}
          x='39.93'
          y='2.27'
          width='19.73'
          height='30.93'
          rx='1.24'
          ry='1.24'
          transform='translate(-2.92 21.6) rotate(-23.8)'
        />
        <path
          className={cx('logo', 'pf-red-dark')}
          d='M49.71,12.25l-13.15-.07,9.95,22.56a1.24,1.24,0,0,0,1.63.63l1.3-.57Z'
        />
        <path
          className={cx('logo', 'pf-blue-bright')}
          d='M48.92,11.06,22.38.77a1.24,1.24,0,0,0-1.6.7L15.09,16.14,26.78,11a1.24,1.24,0,0,1,1.63.63l6.73,15.26,6.64,2.58a1.24,1.24,0,0,0,1.6-.7l6.24-16.1A1.24,1.24,0,0,0,48.92,11.06Z'
        />
        <path
          className={cx('logo', 'pf-blue-dark')}
          d='M15.09,16.14,26.78,11h0l.1,0,.11,0v-.06H17.14Z'
        />
      </svg>
    </div>
  </div>
);

export default Home;
