import classNames from 'classnames/bind';
import React from 'react';

import styles from './TitleStyles.module.scss';

const cx = classNames.bind(styles);

export interface TitleProps {
  title: string;
}

export const Title: React.SFC<TitleProps> = ({ title }) => (
  <h1 className={cx('title')}>{title}</h1>
);
