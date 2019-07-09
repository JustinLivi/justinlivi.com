import { Location } from '@reach/router';
import classNames from 'classnames/bind';
import { isNil, map } from 'lodash';
import React, { Fragment } from 'react';

import { BrandComponent } from '../Brand/BrandComponent';
import { TitleGroupComponent } from '../TitleGroup/TitleGroupComponent';
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

const getTitle = (path: string[]): string =>
  path.length <= 1 ? 'justin livi' : mapRoute(path[path.length - 1]);

export const HeaderComponent: React.SFC = () => (
  <Location>
    {({ location: { pathname } }) => {
      const path = pathname.split('/').slice(1);
      console.log(pathname);
      return (
        <Fragment>
          <header className={cx('header')}>
            <BrandComponent />
          </header>
          <TitleGroupComponent
            title={getTitle(path)}
            path={pathname === '/' ? [] : map(path, mapRoute)}
            expanded={pathname === '/'}
          />
        </Fragment>
      );
    }}
  </Location>
);
