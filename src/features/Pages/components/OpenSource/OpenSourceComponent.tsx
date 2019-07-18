import classNames from 'classnames/bind';
import { packagesRsaa } from 'features/Pages/actions/packagesRsaa';
import { Package } from 'features/Pages/pagesState';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styles from './OpenSourceStyles.module.scss';

const cx = classNames.bind(styles);

export interface OpenSourceProps {
  path: string;
  packages?: Package[];
  isFetching?: boolean;
  fetchPackagesIfNeeded?: () => void;
}

export const OpenSourceComponent: React.SFC<OpenSourceProps> = ({
  packages,
  isFetching
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(packagesRsaa());
  });
  return (
    <div className={cx('page', 'openSource')}>
      {isFetching || !packages
        ? 'Loading...'
        : packages.map(({ name, links }) => (
            <div key={name}>
              <p>{name}</p>
              <p>
                <a href={links.npm} target='_blank' rel='noopener noreferrer'>
                  npm
                </a>{' '}
                |{' '}
                <a
                  href={links.repository}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  github
                </a>
              </p>
              <hr />
            </div>
          ))}
    </div>
  );
};
