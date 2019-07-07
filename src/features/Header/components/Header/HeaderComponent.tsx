import classNames from 'classnames/bind';
import React from 'react';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { BrandComponent } from '../Brand/BrandComponent';
import { TitleGroupComponent } from '../TitleGroup/TitleGroupComponent';
import styles from './HeaderComponent.module.scss';

const cx = classNames.bind(styles);

export interface HeaderComponentProps {
  title: string;
}

export const HeaderComponent: React.SFC<HeaderComponentProps> = ({ title }) => {
  const position = useScrollPosition();
  return (
    <React.Fragment>
      <header className={cx('header')}>
        <BrandComponent />
      </header>
      <TitleGroupComponent
        title='justin livi'
        path={['test']}
        expanded={false}
      />
    </React.Fragment>
  );
};
