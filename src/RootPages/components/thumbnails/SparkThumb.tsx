import React from 'react';
import styled from 'styled-components';

import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

const OrangePolygon = styled.polygon`
  fill: ${color(ColorToken.sparkMonoOrangeDesaturated)};
  transition: fill 0.4s ease;
`;

const YellowPolygon = styled.polygon`
  fill: ${color(ColorToken.sparkMonoYellowDesaturated)};
  transition: fill 0.4s ease;
`;

const RedPolygon = styled.polygon`
  fill: ${color(ColorToken.sparkMonoRedDesaturated)};
  transition: fill 0.4s ease;
`;

const ThumbSpan = styled.span`
  display: block;
  cursor: pointer;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 40%;
  padding-right: 40%;
  background-color: ${color(ColorToken.greyPrimary)};

  &:hover {
    ${RedPolygon} {
      fill: ${color(ColorToken.sparkMonoRed)};
    }

    ${YellowPolygon} {
      fill: ${color(ColorToken.sparkMonoYellow)};
    }

    ${OrangePolygon} {
      fill: ${color(ColorToken.sparkMonoOrange)};
    }
  }
`;

export const SparkThumb: React.FunctionComponent = () => (
  <ThumbSpan>
    <svg viewBox="0 0 69.56 107.45">
      <OrangePolygon points="69.56 40.57 51.53 53.08 45.5 16.45 30.15 0 38.02 28.48 28.37 44 26.04 27.14 17.82 40.16 26.59 63.9 4.32 79.63 33.3 107.45 68.41 86.35 65.17 56.5 69.56 40.57" />
      <OrangePolygon points="65.36 33.44 55.22 21.66 57.13 32.62 54.44 41.96 65.36 33.44" />
      <OrangePolygon points="15.35 57.58 8.63 48.36 9.32 32.62 0 54.56 6.99 66.8 15.35 57.58" />
      <OrangePolygon points="30.15 0 38.1 28.78 45.5 16.45 30.15 0" />
      <OrangePolygon points="17.82 40.16 26.04 27.14 28.37 44 17.82 40.16" />
      <OrangePolygon points="8.63 48.36 6.99 66.8 0 54.56 8.63 48.36" />
      <OrangePolygon points="28.37 44 26.59 63.9 51.53 53.08 28.37 44" />
      <OrangePolygon points="69.56 40.57 51.53 53.08 65.17 56.5 69.56 40.57" />
      <OrangePolygon points="57.13 32.62 54.44 41.96 65.36 33.44 57.13 32.62" />
      <OrangePolygon points="35.5 89.5 51.53 53.08 68.41 86.35 35.5 89.5" />
      <OrangePolygon points="33.3 107.45 35.5 89.5 4.32 79.63 33.3 107.45" />
      <YellowPolygon points="26.59 63.9 4.32 79.63 35.5 89.5 26.59 63.9" />
      <YellowPolygon points="33.3 107.45 35.5 89.5 68.41 86.35 33.3 107.45" />
      <YellowPolygon points="65.17 56.5 51.53 53.08 68.41 86.35 65.17 56.5" />
      <YellowPolygon points="8.63 48.36 6.99 66.8 15.35 57.58 8.63 48.36" />
      <RedPolygon points="17.82 40.16 26.59 63.9 28.37 44 17.82 40.16" />
      <RedPolygon points="45.5 16.45 28.37 44 51.53 53.08 45.5 16.45" />
      <RedPolygon points="55.22 21.66 57.13 32.62 65.36 33.44 55.22 21.66" />
      <RedPolygon points="51.53 53.08 35.5 89.5 26.59 63.9 51.53 53.08" />
      <RedPolygon points="8.63 48.36 0 54.56 9.32 32.62 8.63 48.36" />
    </svg>
  </ThumbSpan>
);
