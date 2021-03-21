import { createGlobalStyle } from 'styled-components';

import { color, ThemeTransitionStyle } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { interactiveStyle } from 'styles/interactive';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'Poppins', sans-serif;
    font-display: swap;
    font-weight: 400;
    background-color: ${color(ColorToken.secondary)};
    margin: 0;
    padding: 0;
    font-size: 88%;
    color: ${color(ColorToken.primary)};
  }

  div, span, a, ul, ol, li, body, html, header, main, nav, h1, h2, h3, polygon, path, rect {
    ${ThemeTransitionStyle}
  }

  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    ${interactiveStyle}
  }

  a {
    text-decoration: none;
    padding-bottom: 0.25rem;
    color: ${color(ColorToken.primary)};
    ${interactiveStyle}
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
`;
