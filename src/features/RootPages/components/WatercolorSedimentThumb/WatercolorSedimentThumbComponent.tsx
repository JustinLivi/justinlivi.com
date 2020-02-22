import classNames from 'classnames/bind';
import React from 'react';

import watercolorSedimentThumb from './watercolorSedimentThumb.jpg';
import styles from './WatercolorSedimentThumbStyles.module.scss';

const cx = classNames.bind(styles);

export const WatercolorSedimentThumb: React.SFC = () => (
  <div role="link" className={cx('thumb')}>
    <img src={watercolorSedimentThumb} alt="watercolor sediment" />
  </div>
);
