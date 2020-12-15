import { CacheStatus } from 'utils';

export interface Package {
  npm: string;
  repository?: string;
  name: string;
}

export interface PackagesState {
  cacheStatus: CacheStatus;
  results: Package[];
}

export const packagesInitialState: PackagesState = {
  cacheStatus: CacheStatus.BEHIND,
  results: []
};
