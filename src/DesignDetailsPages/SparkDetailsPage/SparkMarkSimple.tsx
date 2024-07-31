import React from 'react';

import { FilledPath, FilledPolygon, FilledRect } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

export interface SparkMarkSimpleProps {
  inverted?: boolean;
}

export const SparkMarkSimple: React.FunctionComponent<SparkMarkSimpleProps> = ({ inverted }) => (
  <svg viewBox="0 0 81.19 83.66">
    <FilledRect
      fillToken={inverted ? ColorToken.sparkPrimary : ColorToken.sparkGreyPrimary}
      width="81.19"
      height="83.66"
    />
    <FilledPolygon
      fillToken={inverted ? ColorToken.sparkSecondary : ColorToken.sparkPrimary}
      points="52.42 36.2 45.94 40.59 43.79 27.57 38.33 21.43 41.17 31.89 37.81 37.44 36.91 31.51 33.99 36.09 37.08 44.5 29.32 50.21 39.39 60.14 39.39 60.14 52.02 52.56 51.03 41.93 52.42 36.2"
    />
    <FilledPath
      fillToken={inverted ? ColorToken.sparkSecondary : ColorToken.sparkPrimary}
      d="M33,42.23a28.16,28.16,0,0,1-2.21-3.37V33.41l-3.24,7.67L30,45.37Z"
    />
    <FilledPolygon
      fillToken={inverted ? ColorToken.sparkSecondary : ColorToken.sparkPrimary}
      points="50.97 33.66 47.34 29.26 48.07 33.3 46.97 36.69 50.97 33.66"
    />
  </svg>
);

SparkMarkSimple.defaultProps = {
  inverted: false,
};
