import { packagesRequest, PackagesResult, packagesSucceed } from 'features/Pages/actions/packagesRsaa';
import { Package, packagesInitialState } from 'features/Pages/pagesState';
import { filter, map } from 'lodash';
import { on, reducer } from 'ts-action';
import { CacheStatus } from 'utils';

export const defaultLinks = { npm: undefined, repository: undefined };

export const transformPackageResults = ({
  package: { name, links: { npm, repository } = defaultLinks } = {
    name: undefined,
    links: defaultLinks
  }
}: PackagesResult) => ({
  name,
  npm,
  repository
});

export const isPackage = (arg: any): arg is Package =>
  typeof arg === 'object' &&
  typeof arg.name === 'string' &&
  typeof arg.npm === 'string';

export const packageStateReducer = reducer(
  packagesInitialState,
  on(packagesRequest, state => ({
    ...state,
    cacheStatus: CacheStatus.FETCHING
  })),
  on(packagesSucceed, (state, { payload: { results } }) => ({
    cacheStatus: CacheStatus.CACHED,
    results: filter<Partial<Package>, Package>(
      map(results || [], transformPackageResults),
      isPackage
    )
  }))
);
