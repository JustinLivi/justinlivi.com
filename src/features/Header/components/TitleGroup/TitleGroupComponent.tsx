import classNames from 'classnames/bind';
import { Navigation } from 'features/Header/components/Navigation/NavigationComponent';
import { Title } from 'features/Header/components/Title/TitleComponent';
import React from 'react';

import styles from './TitleGroupStyles.module.scss';

const cx = classNames.bind(styles);

export interface TitleGroupProps {
  title: string;
  fixed: boolean;
  path: string[];
}

export const TitleGroup: React.SFC<TitleGroupProps> = ({
  title,
  fixed,
  path
}) => (
  <>
    <nav className={cx('sticky')}>
      <Title title={title} />
      <Navigation path={path} fixed={fixed} />
    </nav>
  </>
);
