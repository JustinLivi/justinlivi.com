import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { FilledPath, FilledPolygon, FilledRect } from 'SharedComponents/SvgElements';
import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';

const DarkBackgroundGrid = styled(Grid)`
  background-color: ${color(ColorToken.brinkbitSecondary)};
`;

export const BrinkbitPanelTypography: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <DarkBackgroundGrid container={true} justify="center">
      <Grid item={true} xs={8} sm={6} md={4}>
        <DesignContainerDiv>
          <svg viewBox="0 0 127.59 26.74">
            <FilledPath
              fillToken={ColorToken.brinkbitBlue}
              d="M10.57,7.46a4.7,4.7,0,0,0-1.94,0,6,6,0,0,0-3.8,2.73V1.8H0V26.72H4.83V24.54a5.45,5.45,0,0,0,3.8,2.18,8.81,8.81,0,0,0,1.31,0c2.58-.17,5.83-2.33,6.48-6.77a19.67,19.67,0,0,0,.11-4.68C16.27,11.43,13.87,8.22,10.57,7.46ZM8.52,22.78c-2.62-.12-3.59-2.73-3.59-5.22,0-3.22,1-5.88,3.59-6,3.18,0,3.47,3.8,3.47,6S11.67,22.78,8.52,22.78Z"
            />
            <FilledPath
              fillToken={ColorToken.brinkbitBlue}
              d="M98.87,7.46a4.74,4.74,0,0,0-2,0,6,6,0,0,0-3.79,2.73V1.8H88.29V26.72h4.83V24.54a5.45,5.45,0,0,0,3.79,2.18,8.87,8.87,0,0,0,1.31,0c2.59-.17,5.84-2.33,6.48-6.77a19.62,19.62,0,0,0,.12-4.68C104.56,11.43,102.17,8.22,98.87,7.46ZM96.81,22.78c-2.61-.12-3.58-2.73-3.58-5.22,0-3.22,1-5.88,3.58-6,3.19,0,3.48,3.8,3.48,6S100,22.78,96.81,22.78Z"
            />
            <FilledRect fillToken={ColorToken.brinkbitBlue} x="37.03" y="0.14" width="4.93" height="3.98" />
            <FilledRect fillToken={ColorToken.brinkbitBlue} x="37.03" y="6.81" width="4.93" height="19.91" />
            <FilledRect fillToken={ColorToken.brinkbitBlue} x="108.86" width="4.93" height="3.98" />
            <FilledRect fillToken={ColorToken.brinkbitBlue} x="108.86" y="6.67" width="4.93" height="19.91" />
            <FilledPath
              fillToken={ColorToken.brinkbitBlue}
              d="M31.84,6.27a7.41,7.41,0,0,0-6.19,3.55l-.27-3H20.82V26.72h4.83V18c0-4.24,1.3-7,5.53-7h1.64V6.26Z"
            />
            <FilledPath
              fillToken={ColorToken.brinkbitBlue}
              d="M127.59,10.76V6.81h-3.14v-4h-4.29l-.27,4H118v4h1.92v8c0,5.95,1.52,8,4.56,8h1a5.65,5.65,0,0,0,2.1-.45v-4.1c-2.32.74-3.14-.37-3.14-3V10.76Z"
            />
            <FilledPolygon
              fillToken={ColorToken.brinkbitBlue}
              points="79.39 8.01 73.94 14.82 73.94 1.8 69.03 1.8 69.03 26.72 73.94 26.72 73.94 18.63 79.48 26.72 85.15 26.72 78.13 16.63 85.15 8.01 79.39 8.01"
            />
            <FilledPath
              fillToken={ColorToken.brinkbitBlue}
              d="M57,6.37h0a5.4,5.4,0,0,0-5.27,3.45l-.26-3H47.06V26.72h4.7v-10c0-3.26,1.39-5.54,3.47-5.54,3.8,0,4,3.89,4,7v8.57h5l0-10.88C64.19,11.45,61.78,6.37,57,6.37Z"
            />
          </svg>
        </DesignContainerDiv>
      </Grid>
    </DarkBackgroundGrid>
  </Grid>
);
