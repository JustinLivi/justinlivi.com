import { packagesRequest, PackagesResult, packagesSucceed } from 'features/Pages/actions/packagesRsaa';
import { filter, map } from 'lodash';
import { on, reducer } from 'ts-action';

export enum CacheStatus {
  BEHIND = 'BEHIND',
  FETCHING = 'FETCHING',
  CACHED = 'CACHED',
  ERRORED = 'ERRORED'
}

export interface Package {
  npm: string;
  repository?: string;
  name: string;
}

export interface PackagesState {
  cacheStatus: CacheStatus;
  results: Package[];
}

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

export const packageStateReducer = reducer<PackagesState>(
  {
    cacheStatus: CacheStatus.BEHIND,
    results: []
  },
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
