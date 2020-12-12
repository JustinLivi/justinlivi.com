import 'styled-components';
import { ColorToken } from './src/styles/colorThemes';

declare module 'styled-components' {
  export type ColorTheme = Record<ColorToken, string>;

  export interface DefaultTheme {
    colors: ColorTheme;
  }
}
