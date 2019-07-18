import { headerInitialState, HeaderState } from 'features/Header/store/headerState';
import { packagesInitialState, PackagesState } from 'features/RootPages/store/packagesState';

export interface State {
  packages: PackagesState;
  headerExpanded: HeaderState;
}

export const initialState: State = {
  packages: packagesInitialState,
  headerExpanded: headerInitialState
};
