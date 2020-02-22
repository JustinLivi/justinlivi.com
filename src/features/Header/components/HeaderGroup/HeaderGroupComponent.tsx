import classNames from 'classnames/bind';
import { Brand } from 'features/Header/components/Brand/BrandComponent';
import { TitleGroup } from 'features/Header/components/TitleGroup/TitleGroupComponent';
import { isNil, map } from 'lodash';
import React, { useEffect } from 'react';

import styles from './HeaderStyles.module.scss';

const cx = classNames.bind(styles);

const routeMappings: { [key: string]: string } = {
  'open-source': 'open source',
  'generative-art': 'generative art',
  design: 'design',
  contact: 'contact',
  spark: 'spark',
  brinkbit: 'brinkbit',
  hitchd: 'hitchd',
  community: 'community',
  'watercolor-sediment': 'watercolor sediment',
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
    window.setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 200);
  }, [pathname]);
  return (
    <>
      <header className={cx('header')}>
        <Brand />
      </header>
      <TitleGroup
        title={pathname === '/' ? 'justin livi' : mapRoute(path[path.length - 1])}
        path={pathname === '/' ? [] : map(path, mapRoute)}
        fixed={pathname === '/'}
      />
    </>
  );
};
