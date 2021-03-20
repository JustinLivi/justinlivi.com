import React from 'react';
import Grid from '@material-ui/core/Grid';

import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';
import { GradientPath, GradientRect, StopColor } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

enum LinearGradientIds {
  linearGradient = 'linear-gradient',
  linearGradient2 = 'linear-gradient-2',
  linearGradient3 = 'linear-gradient-3',
  linearGradient4 = 'linear-gradient-4',
  linearGradient5 = 'linear-gradient-5',
  linearGradient6 = 'linear-gradient-6',
  linearGradient7 = 'linear-gradient-7',
}

export const HitchdPanelTypography: React.FunctionComponent = () => (
  <Grid item={true} xs={12}>
    <Grid container={true} justify="center">
      <Grid item={true} xs={6} sm={4} md={2}>
        <DesignContainerDiv>
          <svg viewBox="0 0 80.89 33.17">
            <defs>
              <linearGradient
                id={LinearGradientIds.linearGradient}
                x1="27.54"
                y1="32.58"
                x2="27.54"
                y2="9.98"
                gradientUnits="userSpaceOnUse"
              >
                <StopColor offset="0" stopColorToken={ColorToken.hitchdPink} />
                <StopColor offset="1" stopColorToken={ColorToken.hitchdOrange} />
              </linearGradient>
              <linearGradient
                id={LinearGradientIds.linearGradient2}
                x1="19.25"
                y1="32.53"
                x2="19.25"
                y2="4.18"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
              <linearGradient
                id={LinearGradientIds.linearGradient3}
                x1="7.77"
                y1="32.53"
                x2="7.77"
                y2="4.18"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
              <linearGradient
                id={LinearGradientIds.linearGradient4}
                x1="54.11"
                y1="32.53"
                x2="54.11"
                y2="4.18"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
              <linearGradient
                id={LinearGradientIds.linearGradient5}
                x1="71.91"
                y1="32.53"
                x2="71.91"
                y2="4.18"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
              <linearGradient
                id={LinearGradientIds.linearGradient6}
                x1="38.54"
                y1="32.53"
                x2="38.54"
                y2="4.18"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
              <linearGradient
                id={LinearGradientIds.linearGradient7}
                x1="12.18"
                y1="6.31"
                x2="26.25"
                y2="6.31"
                xlinkHref={`#${LinearGradientIds.linearGradient}`}
              />
            </defs>
            <GradientPath
              gradientId={LinearGradientIds.linearGradient}
              d="M23.59,15.16V25.9c0,3.62,2.24,7.4,7.89,6.84V28.66C29,28.84,28,27.47,28,25.75V19.17h3.08v-4H28l0,0Z"
            />
            <GradientRect
              gradientId={LinearGradientIds.linearGradient2}
              x="17.02"
              y="15.16"
              width="4.47"
              height="17.58"
            />
            <GradientPath
              gradientId={LinearGradientIds.linearGradient3}
              d="M7.77,14.73a8.56,8.56,0,0,0-3.3.61v-8H0v25.4H4.47V21.6a3.22,3.22,0,0,1,3.4-2.47,3.06,3.06,0,0,1,3.22,3.23V32.74h4.44V22.13C15.53,19.44,13.83,14.73,7.77,14.73Z"
            />
            <GradientPath
              gradientId={LinearGradientIds.linearGradient4}
              d="M54.11,14.73a8.56,8.56,0,0,0-3.3.61V10.68H46.34V32.74h4.47V21.6a3.22,3.22,0,0,1,3.4-2.47,3.06,3.06,0,0,1,3.22,3.23V32.74h4.44V22.13C61.87,19.44,60.17,14.73,54.11,14.73Z"
            />
            <GradientPath
              gradientId={LinearGradientIds.linearGradient5}
              d="M76.39,7.34v9.41a7.23,7.23,0,0,0-5.08-2c-3.39,0-8.38,3-8.38,9.47a8.92,8.92,0,0,0,9,9,9.06,9.06,0,0,0,9-9V7.34ZM71.84,29a4.64,4.64,0,0,1-4.42-5,4.65,4.65,0,0,1,4.26-5,4.78,4.78,0,0,1,4.66,5A4.63,4.63,0,0,1,71.84,29Z"
            />
            <GradientPath
              gradientId={LinearGradientIds.linearGradient6}
              d="M40.91,14.73c-4.55.21-8.37,3-8.37,9.47,0,4.85,3,9,9,9a7.49,7.49,0,0,0,3-.45V28.6a12.15,12.15,0,0,1-3.1.36C39.92,29,37,27.87,37,24c0-3.7,2.66-4.94,4.27-5a7.29,7.29,0,0,1,3.25.5v-4A6.34,6.34,0,0,0,40.91,14.73Z"
            />
            <GradientPath
              gradientId={LinearGradientIds.linearGradient7}
              d="M25.37,5A5.26,5.26,0,0,0,22.8,3.05C22.06.68,19.16-.58,16.3.26s-4.68,3.5-4,5.93a4.54,4.54,0,0,0,3.89,3.06,4.89,4.89,0,0,0,.56,1.09A5.31,5.31,0,0,0,20,12.49a5.69,5.69,0,0,0,1.15.12,5,5,0,0,0,5-3.85A4.77,4.77,0,0,0,25.37,5ZM18.51,6.63A2.57,2.57,0,0,1,20.3,5.21l-.13.21A3.71,3.71,0,0,1,18.51,6.63ZM14.64,5.52c-.33-1.14.74-2.49,2.33-3A4.06,4.06,0,0,1,18.1,2.4a3.13,3.13,0,0,1,1.69.46A4.94,4.94,0,0,0,16,6.58l0,.17A2,2,0,0,1,14.64,5.52Zm9.15,2.73a2.66,2.66,0,0,1-3.25,1.89,2.92,2.92,0,0,1-1.71-1.07h0a6.12,6.12,0,0,0,3.27-2.25,4.78,4.78,0,0,0,.58-1.12,2.75,2.75,0,0,1,.68.68A2.37,2.37,0,0,1,23.79,8.25Z"
            />
          </svg>
        </DesignContainerDiv>
      </Grid>
    </Grid>
  </Grid>
);
