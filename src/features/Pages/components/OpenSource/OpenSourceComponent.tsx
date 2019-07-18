import classNames from 'classnames/bind';
import { packagesRsaa } from 'features/Pages/actions/packagesRsaa';
import { packagesCacheStatusSelector, packagesResultsSelector } from 'features/Pages/selectors/packagesSelectors';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CacheStatus } from 'utils';

import styles from './OpenSourceStyles.module.scss';

const cx = classNames.bind(styles);

export interface OpenSourceProps {
  path: string;
}

export const OpenSource: React.SFC<OpenSourceProps> = () => {
  const dispatch = useDispatch();
  const packages = useSelector(packagesResultsSelector);
  const packagesCacheStatus = useSelector(packagesCacheStatusSelector);
  useEffect(() => {
    if (packagesCacheStatus === CacheStatus.BEHIND) {
      dispatch(packagesRsaa());
    }
  }, [packagesCacheStatus, dispatch]);
  return (
    <>
      {packagesCacheStatus === CacheStatus.BEHIND ||
      packagesCacheStatus === CacheStatus.FETCHING
        ? 'Loading...'
        : packages.map(({ name, npm, repository }) => (
            <div className={cx('package')} key={name}>
              <h3>{name}</h3>
              <p>
                <a href={npm} target='_blank' rel='noopener noreferrer'>
                  npm
                </a>{' '}
                {repository && (
                  <>
                    |{' '}
                    <a
                      href={repository}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      github
                    </a>
                  </>
                )}
              </p>
            </div>
          ))}
    </>
  );
};
