import { DefaultTheme } from 'styled-components';

import { ColorThemeId } from 'features/styles/colorThemes/colorThemeTypes';
import { getColorTheme } from 'features/styles/colorThemes/colorTheme';

export interface ThemeConstructorArgs {
  colorTheme: ColorThemeId;
}

export const constructTheme = ({ colorTheme }: ThemeConstructorArgs): DefaultTheme => ({
  colors: getColorTheme(colorTheme),
});
