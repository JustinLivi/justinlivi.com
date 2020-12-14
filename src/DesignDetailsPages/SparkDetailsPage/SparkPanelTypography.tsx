import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { FilledPath } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { color } from 'styles/colorThemes/colorTheme';
import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';

const SecondaryColorPanel = styled(Grid)`
  background-color: ${color(ColorToken.sparkGreySecondary)};
`;

export const SparkPanelTypography: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <SecondaryColorPanel container={true} justify="center">
      <Grid item={true} xs={8} sm={6} md={4}>
        <DesignContainerDiv>
          <svg viewBox="0 0 126.3 28.93">
            <FilledPath
              fillToken={ColorToken.sparkGreyPrimary}
              d="M10.92,28.93a16.67,16.67,0,0,1-5.8-1A16,16,0,0,1,0,24.74l2.77-3.29A15.69,15.69,0,0,0,6.62,24a10.52,10.52,0,0,0,4.41.88,5.67,5.67,0,0,0,3.38-.9,2.78,2.78,0,0,0,1.26-2.39v-.07a2.92,2.92,0,0,0-.25-1.26,2.73,2.73,0,0,0-.9-1,6.84,6.84,0,0,0-1.8-.89,25,25,0,0,0-3-.83A28.92,28.92,0,0,1,6,16.38a10.36,10.36,0,0,1-2.73-1.49,5.88,5.88,0,0,1-1.69-2.15A7.31,7.31,0,0,1,1,9.67V9.59a7.07,7.07,0,0,1,2.5-5.47A8.57,8.57,0,0,1,6.32,2.57,10.9,10.9,0,0,1,9.91,2a14.81,14.81,0,0,1,5.18.85,15.5,15.5,0,0,1,4.32,2.44L16.94,8.77a16.19,16.19,0,0,0-3.55-2,9.71,9.71,0,0,0-3.56-.69A4.91,4.91,0,0,0,6.69,7a2.74,2.74,0,0,0-1.12,2.2v.08a3.29,3.29,0,0,0,.26,1.33,2.67,2.67,0,0,0,1,1,8,8,0,0,0,1.91.88c.81.28,1.84.56,3.09.86a30,30,0,0,1,3.66,1.16,9.07,9.07,0,0,1,2.64,1.55,6.23,6.23,0,0,1,1.6,2.13A6.94,6.94,0,0,1,20.23,21v.07a7.6,7.6,0,0,1-.69,3.29,6.91,6.91,0,0,1-1.91,2.47,8.38,8.38,0,0,1-2.94,1.53A12.82,12.82,0,0,1,10.92,28.93Z"
            />
            <FilledPath
              fillToken={ColorToken.sparkGreyPrimary}
              d="M25.71,2.58H36a12.84,12.84,0,0,1,4.1.62A8.49,8.49,0,0,1,43.17,5a7.9,7.9,0,0,1,2,2.74,9,9,0,0,1,.68,3.57v.07A8.61,8.61,0,0,1,45,15.18,7.88,7.88,0,0,1,42.77,18a9.86,9.86,0,0,1-3.31,1.69,14,14,0,0,1-4.05.57H30.23v8.36H25.71Zm9.85,13.51a6.09,6.09,0,0,0,4.12-1.3,4.24,4.24,0,0,0,1.5-3.35v-.08a4.1,4.1,0,0,0-1.52-3.48,6.53,6.53,0,0,0-4.1-1.18H30.23v9.39Z"
            />
            <FilledPath
              fillToken={ColorToken.sparkGreyPrimary}
              d="M59.09,0,72,28.72H67.42l-2.51-6.31H53.17l-2.56,6.31H46.14Zm4.22,18.55L59,8.62l-4.26,9.93Z"
            />
            <FilledPath
              fillToken={ColorToken.sparkGreyPrimary}
              d="M76.11,2.58H87.69A12.63,12.63,0,0,1,92,3.27a8.74,8.74,0,0,1,3.16,1.91,7.57,7.57,0,0,1,1.59,2.49,8.45,8.45,0,0,1,.56,3.12v.07a8.45,8.45,0,0,1-.46,2.88A7.58,7.58,0,0,1,95.6,16a7.84,7.84,0,0,1-1.95,1.67,9.72,9.72,0,0,1-2.51,1.06l7,9.84H92.77l-6.4-9.06H80.64v9.06H76.11ZM87.34,15.46a6.05,6.05,0,0,0,3.91-1.17A3.88,3.88,0,0,0,92.7,11.1V11A3.86,3.86,0,0,0,91.29,7.8a6.42,6.42,0,0,0-4-1.1H80.64v8.76Z"
            />
            <FilledPath
              fillToken={ColorToken.sparkGreyPrimary}
              d="M103.28,2.53h4.54V15.62L120.2,2.53h5.62L115,13.73l11.3,14.84h-5.54l-8.89-11.72L107.82,21v7.55h-4.54Z"
            />
          </svg>
        </DesignContainerDiv>
      </Grid>
    </SecondaryColorPanel>
  </Grid>
);
