import { State } from 'features/App/state/rootState';

export const packagesResultsSelector = ({ packages: { results } }: State) => results;

export const packagesCacheStatusSelector = ({ packages: { cacheStatus } }: State) => cacheStatus;
