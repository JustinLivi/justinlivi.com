import { headerInitialState, HeaderState } from 'features/Header/store/headerState';
import { packagesInitialState, PackagesState } from 'features/RootPages/store/packagesState';
import { ColorThemeId } from 'features/styles/colorThemes/colorThemeTypes';

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
