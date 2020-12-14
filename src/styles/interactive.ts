import { css } from 'styled-components';

import { color, themeTransition } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

const width = '0.1rem';

export const interactiveStyle = css`
  color: ${color(ColorToken.primary)};

  padding-left: 0;
  padding-right: 0;

  text-decoration: none;
  background: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  transition: border-bottom-color 300ms linear, ${themeTransition};
  border: 0;
  border-bottom-width: ${width};
  border-bottom-color: ${color(ColorToken.interactiveHiglightInactive)};
  border-bottom-style: solid;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: none;
  }

  &:focus,
  &:hover {
    transition: border-bottom-color 200ms linear, ${themeTransition};
    border-bottom-color: ${color(ColorToken.interactiveHiglightHover)};
  }

  &:active {
    transition: border-bottom-color 100ms linear, ${themeTransition};
    border-bottom-color: ${color(ColorToken.interactiveHiglightActive)};
    outline: none;
  }

  &[disabled] {
    cursor: initial;
    color: inherit;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      background: none;
      border-bottom-color: ${color(ColorToken.interactiveHiglightInactive)};
    }

    &:active {
      border-bottom-color: ${color(ColorToken.interactiveHiglightInactive)};
      outline: none;
    }
  }
`;
