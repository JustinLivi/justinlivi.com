import { packagesRequest, PackagesResult, packagesSucceed } from 'RootPages/actions/packagesRsaa';
import { Package, packagesInitialState } from 'RootPages/store/packagesState';
import { on, reducer } from 'ts-action';
import { CacheStatus } from 'utils';

export const defaultLinks = { npm: undefined, repository: undefined };

export const transformPackageResults = ({
  package: { name, links: { npm, repository } = defaultLinks } = {
    name: undefined,
    links: defaultLinks,
  },
}: PackagesResult): Partial<Package> => ({
  name,
  npm,
  repository,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPackage = (arg: any): arg is Package =>
  typeof arg === 'object' && typeof arg.name === 'string' && typeof arg.npm === 'string';

export const packageStateReducer = reducer(
  packagesInitialState,
  on(packagesRequest, state => ({
    ...state,
    cacheStatus: CacheStatus.FETCHING,
  })),
  on(packagesSucceed, (state, { payload: { results } }) => ({
    cacheStatus: CacheStatus.CACHED,
    results: (results || []).map(transformPackageResults).filter<Package>(isPackage),
  })),
);
