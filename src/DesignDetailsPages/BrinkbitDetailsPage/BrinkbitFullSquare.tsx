import React from 'react';

import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { FilledPath, FilledPolygon, FilledRect } from 'SharedComponents/SvgElements';

export interface BrinkbitFullSquareProps {
  backgroundColor: ColorToken;
}

export const BrinkbitFullSquare: React.FunctionComponent<BrinkbitFullSquareProps> = ({ backgroundColor }) => (
  <svg viewBox="0 0 137.27 137.27">
    <FilledRect fillToken={backgroundColor} width="137.27" height="137.27" />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M56.12,99.9a1.19,1.19,0,0,0-.46,0,1.44,1.44,0,0,0-.89.64v-2H53.63v5.86h1.14v-.51a1.28,1.28,0,0,0,.89.51H56a1.74,1.74,0,0,0,1.52-1.59,4.34,4.34,0,0,0,0-1.1A2,2,0,0,0,56.12,99.9Zm-.48,3.61c-.62,0-.85-.65-.85-1.23,0-.76.23-1.39.85-1.42s.81.9.81,1.42S56.38,103.51,55.64,103.51Z"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M76.88,99.9a1.14,1.14,0,0,0-.45,0,1.46,1.46,0,0,0-.9.64v-2H74.4v5.86h1.13v-.51a1.3,1.3,0,0,0,.9.51h.31a1.75,1.75,0,0,0,1.52-1.59,4.85,4.85,0,0,0,0-1.1A2,2,0,0,0,76.88,99.9Zm-.48,3.61c-.61,0-.84-.65-.84-1.23,0-.76.23-1.39.84-1.42s.82.9.82,1.42S77.14,103.51,76.4,103.51Z"
    />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="62.34" y="98.18" width="1.16" height="0.94" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="62.34" y="99.75" width="1.16" height="4.68" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="79.23" y="98.15" width="1.16" height="0.94" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="79.23" y="99.72" width="1.16" height="4.68" />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M61.12,99.62a1.76,1.76,0,0,0-1.46.84l-.06-.71H58.53v4.68h1.13v-2c0-1,.31-1.64,1.31-1.64h.38V99.62Z"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M83.64,100.68v-.93H82.9v-.94h-1l-.06.94h-.45v.93h.45v1.87c0,1.4.36,1.88,1.07,1.88h.25a1.28,1.28,0,0,0,.49-.11v-.95h0c-.55.17-.74-.09-.74-.72v-2Z"
    />
    <FilledPolygon
      fillToken={ColorToken.brinkbitBlue}
      points="72.3 100.03 71.02 101.63 71.02 98.57 69.87 98.57 69.87 104.43 71.02 104.43 71.02 102.53 72.32 104.43 73.66 104.43 72.01 102.06 73.66 100.03 72.3 100.03"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M67.05,99.65h0a1.26,1.26,0,0,0-1.24.81l-.07-.71h-1v4.68h1.11v-2.36c0-.77.32-1.31.81-1.31.9,0,.95.92.95,1.66v2h1.16v-2.56C68.73,100.84,68.16,99.65,67.05,99.65Z"
    />
    <FilledPolygon
      fillToken={ColorToken.brinkbitBlue}
      points="63.64 43.72 63.64 33.72 53.63 33.72 53.63 73.73 73.64 73.73 73.64 63.73 63.64 63.73 63.64 53.73 73.64 53.73 73.64 63.73 83.64 63.73 83.64 43.72 63.64 43.72"
    />
  </svg>
);
