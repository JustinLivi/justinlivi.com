import { packagesInitialState, PackagesState } from 'features/Pages/pagesState';

export interface State {
  packages: PackagesState;
  headerExpanded: boolean;
}

export const initialState: State = {
  packages: packagesInitialState,
  headerExpanded: true
};
