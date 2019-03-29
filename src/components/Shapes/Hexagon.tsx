import React from 'react';

export interface HexagonProps {
  className: string;
}

export const Hexagon: React.SFC<HexagonProps> = ({ className = '' }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    viewBox='0 0 50 40'
    className={className}
  >
    <polygon points='45,20 35,37.33 15,37.33 5,20 15,2.66 35,2.66' />
  </svg>
);
