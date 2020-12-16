import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { packagesRsaa } from 'RootPages/actions/packagesRsaa';
import { packagesCacheStatusSelector, packagesResultsSelector } from 'RootPages/selectors/packagesSelectors';
import { CacheStatus } from 'utils';

export interface OpenSourcePageProps {
  path: string;
}

const StyledMain = styled.main`
  padding: 2.5rem;
`;

const PackageDiv = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
  }
`;

const StyledH2 = styled.h2`
  font-size: 14.08px;
  font-weight: 700;
  margin: 0;
`;

export const OpenSourcePage: React.FunctionComponent<OpenSourcePageProps> = () => {
  const dispatch = useDispatch();
  const packages = useSelector(packagesResultsSelector);
  const packagesCacheStatus = useSelector(packagesCacheStatusSelector);
  useEffect(() => {
    if (packagesCacheStatus === CacheStatus.BEHIND) {
      dispatch(packagesRsaa());
    }
  }, [packagesCacheStatus, dispatch]);
  return (
    <StyledMain>
      {packagesCacheStatus === CacheStatus.BEHIND || packagesCacheStatus === CacheStatus.FETCHING
        ? 'Loading...'
        : packages.map(({ name, npm, repository }) => (
            <PackageDiv key={name}>
              <StyledH2>{name}</StyledH2>
              <p>
                <a href={npm} target="_blank" rel="noopener noreferrer">
                  npm
                </a>{' '}
                {repository && (
                  <>
                    |{' '}
                    <a href={repository} target="_blank" rel="noopener noreferrer">
                      github
                    </a>
                  </>
                )}
              </p>
            </PackageDiv>
          ))}
    </StyledMain>
  );
};

// eslint-disable-next-line import/no-default-export
export default OpenSourcePage;
