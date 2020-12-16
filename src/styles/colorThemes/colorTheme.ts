import { darkTheme } from 'styles/colorThemes/darkTheme';
import { lightTheme } from 'styles/colorThemes/lightTheme';
import { css, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { ColorTheme, ColorThemeId, ColorToken } from './colorThemeTypes';

export const getColorTheme = (colorTheme: ColorThemeId): ColorTheme =>
  colorTheme === ColorThemeId.light ? lightTheme : darkTheme;

export const color = (token: ColorToken) => <P>({ theme }: ThemedStyledProps<P, DefaultTheme>) => theme.colors[token];

export const themeTransition = 'background-color 3s ease-out, fill 3s ease-out';

export const ThemeTransitionStyle = css`
  transition: ${themeTransition};
`;
