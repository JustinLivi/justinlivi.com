import { headerInitialState, HeaderState } from 'Header/state/headerState';
import { packagesInitialState, PackagesState } from 'RootPages/store/packagesState';
import { ColorThemeId } from 'styles/colorThemes/colorThemeTypes';

export interface State {
  packages: PackagesState;
  headerExpanded: HeaderState;
  colorTheme: ColorThemeId;
}

export const initialState: State = {
  packages: packagesInitialState,
  headerExpanded: headerInitialState,
  colorTheme: ColorThemeId.light,
};
