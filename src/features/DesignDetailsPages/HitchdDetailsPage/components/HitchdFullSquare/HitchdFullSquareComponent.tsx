import classNames from 'classnames/bind';
import React from 'react';

import styles from './HitchdFullSquareStyles.module.scss';

const cx = classNames.bind(styles);

export interface HitchdFullSquareProps {
  inverted?: boolean;
}

export const HitchdFullSquare: React.SFC<HitchdFullSquareProps> = ({
  inverted
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 137.27 137.27'
  >
    <defs>
      <linearGradient
        id='h-linear-gradient'
        x1='57.21'
        y1='85.28'
        x2='57.21'
        y2='61.75'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='0' stopColor='#fd3f71' />
        <stop offset='1' stopColor='#ff6160' />
      </linearGradient>
      <linearGradient
        id='h-linear-gradient-2'
        x1='48.58'
        y1='85.22'
        x2='48.58'
        y2='55.72'
        xlinkHref='#h-linear-gradient'
      />
      <linearGradient
        id='h-linear-gradient-3'
        x1='36.63'
        y1='85.22'
        x2='36.63'
        y2='55.72'
        xlinkHref='#h-linear-gradient'
      />
      <linearGradient
        id='h-linear-gradient-4'
        x1='84.86'
        y1='85.22'
        x2='84.86'
        y2='55.72'
        xlinkHref='#h-linear-gradient'
      />
      <linearGradient
        id='h-linear-gradient-5'
        x1='103.4'
        y1='85.22'
        x2='103.4'
        y2='55.72'
        xlinkHref='#h-linear-gradient'
      />
      <linearGradient
        id='h-linear-gradient-6'
        x1='68.66'
        y1='85.22'
        x2='68.66'
        y2='55.72'
        xlinkHref='#h-linear-gradient'
      />
      <linearGradient
        id='h-linear-gradient-7'
        x1='41.22'
        y1='57.93'
        x2='55.86'
        y2='57.93'
        xlinkHref='#h-linear-gradient'
      />
    </defs>
    <title>HitchdFullSquare_1</title>
    <rect
      className={cx(inverted ? 'invertedBackground' : 'cls-1')}
      width='137.27'
      height='137.27'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-2')}
      d='M53.1,67.15V78.33c0,3.77,2.33,7.69,8.22,7.12V81.2c-2.63.19-3.59-1.24-3.59-3V71.32h3.2V67.19h-3.2l0,0Z'
    />
    <rect
      className={cx(inverted ? 'invertedLogo' : 'cls-3')}
      x='46.26'
      y='67.15'
      width='4.65'
      height='18.3'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-4')}
      d='M36.63,66.7a8.82,8.82,0,0,0-3.43.64V59H28.55V85.45H33.2V73.85a3.35,3.35,0,0,1,3.54-2.56,3.18,3.18,0,0,1,3.35,3.35V85.45h4.63v-11C44.72,71.6,42.94,66.7,36.63,66.7Z'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-5')}
      d='M84.86,66.7a8.82,8.82,0,0,0-3.43.64V62.49H76.78v23h4.65V73.85A3.35,3.35,0,0,1,85,71.29a3.18,3.18,0,0,1,3.35,3.35V85.45H93v-11C93,71.6,91.18,66.7,84.86,66.7Z'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-6')}
      d='M108.05,59V68.8a7.56,7.56,0,0,0-5.29-2.1c-3.53,0-8.71,3.08-8.71,9.85a9.28,9.28,0,0,0,9.35,9.34,9.43,9.43,0,0,0,9.34-9.34V59Zm-4.73,22.51a4.84,4.84,0,0,1-4.61-5.22,4.85,4.85,0,0,1,4.44-5.21A5,5,0,0,1,108,76.3,4.83,4.83,0,0,1,103.32,81.52Z'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-7')}
      d='M71.13,66.7c-4.74.22-8.72,3.08-8.72,9.85,0,5,3.15,9.34,9.35,9.34a8.08,8.08,0,0,0,3.15-.46V81.14a12.52,12.52,0,0,1-3.23.38c-1.58,0-4.6-1.14-4.6-5.22,0-3.85,2.77-5.15,4.44-5.21a7.42,7.42,0,0,1,3.39.52V67.47A6.68,6.68,0,0,0,71.13,66.7Z'
    />
    <path
      className={cx(inverted ? 'invertedLogo' : 'cls-8')}
      d='M55,56.58a5.34,5.34,0,0,0-2.67-2c-.77-2.47-3.79-3.78-6.77-2.91s-4.86,3.65-4.13,6.17a4.74,4.74,0,0,0,4,3.19A5.26,5.26,0,0,0,46,62.13a5.53,5.53,0,0,0,3.39,2.24,6.1,6.1,0,0,0,1.19.13,5.2,5.2,0,0,0,5.16-4A4.92,4.92,0,0,0,55,56.58Zm-7.14,1.69a2.66,2.66,0,0,1,1.86-1.47,1.93,1.93,0,0,1-.13.21A3.7,3.7,0,0,1,47.81,58.27Zm-4-1.16c-.34-1.18.77-2.59,2.43-3.07a4.11,4.11,0,0,1,1.18-.17,3.24,3.24,0,0,1,1.75.48,5.14,5.14,0,0,0-3.93,3.86l0,.18A2.05,2.05,0,0,1,43.78,57.11ZM53.31,60a2.77,2.77,0,0,1-3.38,2,3,3,0,0,1-1.78-1.11h0a6.27,6.27,0,0,0,3.4-2.35,5,5,0,0,0,.61-1.16,3.19,3.19,0,0,1,.71.71A2.51,2.51,0,0,1,53.31,60Z'
    />
  </svg>
);
