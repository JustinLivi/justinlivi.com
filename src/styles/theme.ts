import { DefaultTheme } from 'styled-components';

import { ColorThemeId } from 'styles/colorThemes/colorThemeTypes';
import { getColorTheme } from 'styles/colorThemes/colorTheme';

export interface ThemeConstructorArgs {
  colorTheme: ColorThemeId;
}

export const constructTheme = ({ colorTheme }: ThemeConstructorArgs): DefaultTheme => ({
  colors: getColorTheme(colorTheme),
});

export const scrollTopPosition = 70;
