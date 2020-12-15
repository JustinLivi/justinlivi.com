import { css } from 'styled-components';

import { color, themeTransition } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

const width = '0.1rem';

export const interactiveBaseTiming = '300ms linear';
export const interactiveHoverTiming = '200ms linear';
export const interactiveFocusTiming = '100ms linear';
export const interactiveActiveTiming = '200ms linear';

export const interactiveBaseStyle = css`
  color: ${color(ColorToken.primary)};

  padding-left: 0;
  padding-right: 0;

  text-decoration: none;
  background: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  transition: border-bottom-color ${interactiveBaseTiming}, ${themeTransition};
  border: 0;
  border-bottom-width: ${width};
  border-bottom-color: ${color(ColorToken.interactiveHiglightInactive)};
  border-bottom-style: solid;
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
  }
`;

export const interactiveHoverStyle = css`
  transition: border-bottom-color ${interactiveHoverTiming}, ${themeTransition};
  border-bottom-color: ${color(ColorToken.interactiveHiglightHover)};
  outline: none;
  background: none;
`;

export const interactiveFocusStyle = css`
  transition: border-bottom-color ${interactiveFocusTiming}, ${themeTransition};
  border-bottom-color: ${color(ColorToken.interactiveHiglightActive)};
  outline: none;
  background: none;
`;

export const interactiveActiveStyle = css`
  transition: border-bottom-color ${interactiveActiveTiming}, ${themeTransition};
  border-bottom-color: ${color(ColorToken.interactiveHiglightHover)};
  outline: none;
  background: none;
`;

export const interactiveStyle = css`
  ${interactiveBaseStyle}

  &:hover {
    ${interactiveHoverStyle}
  }

  &:focus {
    ${interactiveFocusStyle}
  }

  &:active {
    ${interactiveActiveStyle}
  }
`;
