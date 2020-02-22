import classNames from 'classnames/bind';
import React from 'react';

import communityThumb from './communityThumb.jpg';
import styles from './CommunityThumbStyles.module.scss';

const cx = classNames.bind(styles);

export const CommunityThumb: React.SFC = () => (
  <div role="link" className={cx('thumb')}>
    <img src={communityThumb} alt="community" />
  </div>
);
