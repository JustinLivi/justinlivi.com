import { darkTheme } from 'features/styles/colorThemes/darkTheme';
import { lightTheme } from 'features/styles/colorThemes/lightTheme';
import { ColorTheme } from 'styled-components';
import { ColorThemeId } from './colorThemeTypes';

export const getColorTheme = (colorTheme: ColorThemeId): ColorTheme =>
  colorTheme === ColorThemeId.light ? lightTheme : darkTheme;
