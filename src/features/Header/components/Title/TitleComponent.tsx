import classNames from 'classnames/bind';
import React from 'react';

import styles from './TitleStyles.module.scss';

const cx = classNames.bind(styles);

export interface TitleComponentProps {
  title: string;
}

export const TitleComponent: React.SFC<TitleComponentProps> = ({ title }) => (
  <h1 className={cx('title')}>{title}</h1>
);
