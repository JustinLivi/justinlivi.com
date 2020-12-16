import { DeepPartial } from 'redux';
import { RSAA } from 'redux-api-middleware';
import { action, payload } from 'ts-action';

export const PACKAGES_REQUEST = '[pages] packages request';
export const PACKAGES_SUCCEED = '[pages] packages succeed';
export const PACKAGES_FAIL = '[pages] packages fail';

export const packagesRsaa = () => ({
  [RSAA]: {
    endpoint: 'https://api.npms.io/v2/search?q=maintainer:justinlivi&size=250&from=0',
    method: 'GET',
    types: [PACKAGES_REQUEST, PACKAGES_SUCCEED, PACKAGES_FAIL],
  },
});

export interface Maintainer {
  email: string;
  username: string;
}

export interface PackagesResultsPayload {
  flags: { unstable: boolean };
  package: {
    author: { name: string };
    date: string;
    description: string;
    keywords: string[];
    links: {
      npm: string;
      bugs: string;
      homepage: string;
      repository: string;
    };
    maintainers: Maintainer[];
    name: string;
    publisher: Maintainer;
    scope: string;
    version: string;
  };
  searchScore: number;
  score: {
    final: number;
    detail: { maintenance: number; popularity: number; quality: number };
  };
}

export type PackagesResult = DeepPartial<PackagesResultsPayload>;

export interface PackagesPayload {
  results: PackagesResult[];
  total: number;
}

export const packagesRequest = action(PACKAGES_REQUEST);
export const packagesSucceed = action(PACKAGES_SUCCEED, payload<PackagesPayload>());
export const packagesFail = action(PACKAGES_FAIL);
