import { darkTheme } from 'features/styles/colorThemes/darkTheme';
import { lightTheme } from 'features/styles/colorThemes/lightTheme';
import { ColorTheme, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { ColorThemeId, ColorToken } from './colorThemeTypes';

export const getColorTheme = (colorTheme: ColorThemeId): ColorTheme =>
  colorTheme === ColorThemeId.light ? lightTheme : darkTheme;

export const color = (token: ColorToken) => ({ theme }: ThemedStyledProps<{}, DefaultTheme>) => theme.colors[token];
