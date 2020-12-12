import 'styled-components';
import { ColorTheme } from './src/styles/colorThemes';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTheme;
  }
}
