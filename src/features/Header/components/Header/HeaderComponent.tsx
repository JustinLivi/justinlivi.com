import { Location } from '@reach/router';
import classNames from 'classnames/bind';
import { BrandComponent } from 'features/Header/components/Brand/BrandComponent';
import { TitleGroupComponent } from 'features/Header/components/TitleGroup/TitleGroupComponent';
import { isNil, map } from 'lodash';
import React, { useEffect } from 'react';

import styles from './HeaderComponent.module.scss';

const cx = classNames.bind(styles);

const routeMappings: { [key: string]: string } = {
  'open-source': 'open source',
  'generative-art': 'generative art',
  design: 'design',
  contact: 'contact'
};

const mapRoute = (key: string) => {
  const value = routeMappings[key];
  return isNil(value) ? 'not found' : value;
};

export interface HeaderGroupProps {
  pathname: string;
}

export const HeaderGroup: React.SFC<HeaderGroupProps> = ({ pathname }) => {
  const path = pathname.split('/').slice(1);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [path]);
  return (
    <>
      <header className={cx('header')}>
        <BrandComponent />
      </header>
      <TitleGroupComponent
        title={
          pathname === '/' ? 'justin livi' : mapRoute(path[path.length - 1])
        }
        path={pathname === '/' ? [] : map(path, mapRoute)}
        fixed={pathname === '/'}
      />
    </>
  );
};

export const HeaderComponent: React.SFC = () => (
  <Location>
    {({ location: { pathname } }) => <HeaderGroup pathname={pathname} />}
  </Location>
);
