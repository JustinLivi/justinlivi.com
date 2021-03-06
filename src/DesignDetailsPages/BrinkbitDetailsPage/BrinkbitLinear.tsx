import React from 'react';

import { FilledPath, FilledPolygon, FilledRect } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

export const BrinkbitLinear: React.FunctionComponent = () => (
  <svg viewBox="0 0 119.41 45">
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M66.38,19.49a2.17,2.17,0,0,0-.88,0,2.71,2.71,0,0,0-1.73,1.24v-3.8H61.59V28.22h2.18v-1a2.48,2.48,0,0,0,1.73,1,4.45,4.45,0,0,0,.59,0A3.39,3.39,0,0,0,69,25.15a9.07,9.07,0,0,0,0-2.12A3.78,3.78,0,0,0,66.38,19.49Zm-.94,7c-1.18-.06-1.62-1.24-1.62-2.37,0-1.46.44-2.67,1.62-2.73,1.45,0,1.58,1.73,1.58,2.73S66.87,26.44,65.44,26.44Z"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M106.39,19.49a2.17,2.17,0,0,0-.88,0,2.69,2.69,0,0,0-1.72,1.24v-3.8H101.6V28.22h2.19v-1a2.44,2.44,0,0,0,1.72,1,4.45,4.45,0,0,0,.59,0A3.38,3.38,0,0,0,109,25.15a9.07,9.07,0,0,0,0-2.12A3.76,3.76,0,0,0,106.39,19.49Zm-.93,7c-1.19-.06-1.63-1.24-1.63-2.37,0-1.46.44-2.67,1.63-2.73,1.44,0,1.57,1.73,1.57,2.73S106.89,26.44,105.46,26.44Z"
    />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="78.36" y="16.17" width="2.24" height="1.8" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="78.36" y="19.2" width="2.24" height="9.02" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="110.92" y="16.11" width="2.24" height="1.8" />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="110.92" y="19.13" width="2.24" height="9.02" />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M76,19a3.35,3.35,0,0,0-2.8,1.61l-.12-1.36H71v9h2.19V24.29c0-1.92.59-3.16,2.51-3.16h.74V19Z"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M119.41,21V19.2H118V17.39H116l-.12,1.81H115V21h.88V24.6c0,2.69.68,3.62,2.06,3.62h.47a2.55,2.55,0,0,0,1-.21V26.15c-1.06.34-1.43-.16-1.43-1.37V21Z"
    />
    <FilledPolygon
      fillToken={ColorToken.brinkbitBlue}
      points="97.56 19.74 95.09 22.83 95.09 16.93 92.87 16.93 92.87 28.22 95.09 28.22 95.09 24.55 97.6 28.22 100.17 28.22 96.99 23.64 100.17 19.74 97.56 19.74"
    />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M87.43,19h0A2.46,2.46,0,0,0,85,20.56l-.12-1.36h-2v9H85V23.66c0-1.47.63-2.51,1.57-2.51,1.73,0,1.82,1.77,1.82,3.18v3.89h2.25V23.29C90.68,21.3,89.58,19,87.43,19Z"
    />
    <FilledRect fillToken={ColorToken.brinkbitBlue} x="19.69" y="22.5" width="5.63" height="5.63" />
    <FilledPath
      fillToken={ColorToken.brinkbitBlue}
      d="M0,0V45H45V0ZM30.94,28.13H25.31v5.62H14.06V11.25h5.63v5.63H30.94Z"
    />
  </svg>
);
