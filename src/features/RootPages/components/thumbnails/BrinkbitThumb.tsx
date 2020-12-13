import React from 'react';
import styled from 'styled-components';

import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

const Polygon = styled.polygon``;

const ThumbSpan = styled.span`
  display: block;
  cursor: pointer;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 40%;
  padding-right: 40%;
  background-color: ${color(ColorToken.greyPrimary)};

  ${Polygon} {
    fill: ${color(ColorToken.greySecondary)};
    transition: fill 0.4s ease;
  }

  &:hover {
    ${Polygon} {
      fill: ${color(ColorToken.brinkbitBlue)};
    }
  }
`;

export const BrinkbitThumb: React.FunctionComponent = () => (
  <ThumbSpan role="link">
    <svg viewBox="0 -5.69 53.81 83.12">
      <Polygon points="17.94 17.94 17.94 0 0 0 0 71.75 35.88 71.75 35.88 53.81 17.94 53.81 17.94 35.88 35.88 35.88 35.88 53.81 53.81 53.81 53.81 17.94 17.94 17.94" />
    </svg>
  </ThumbSpan>
);
