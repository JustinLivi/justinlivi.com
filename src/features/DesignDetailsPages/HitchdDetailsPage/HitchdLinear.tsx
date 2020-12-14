import React from 'react';
import styled from 'styled-components';

import { GradientPath, GradientRect, StopColor } from 'features/SharedComponents/SvgElements';
import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

enum LinearGradientIds {
  linearGradient = 'h2-linear-gradient',
  linearGradient2 = 'h2-linear-gradient-2',
  linearGradient3 = 'h2-linear-gradient-3',
  linearGradient4 = 'h2-linear-gradient-4',
  linearGradient5 = 'h2-linear-gradient-5',
  linearGradient6 = 'h2-linear-gradient-6',
  linearGradient7 = 'h2-linear-gradient-7',
}

const StyledText = styled.text`
  font-size: 13.55px;
  fill: ${color(ColorToken.hitchdPink)};
  font-family: LovedbytheKing, Loved by the King;
  letter-spacing: 0.08em;
`;

export const HitchdLinear: React.FunctionComponent = () => (
  <svg viewBox="0 0 198.5 134.15">
    <defs>
      <linearGradient
        id={LinearGradientIds.linearGradient}
        x1="89.38"
        y1="88.51"
        x2="89.38"
        y2="65.9"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.hitchdPink} />
        <StopColor offset="1" stopColorToken={ColorToken.hitchdOrange} />
      </linearGradient>
      <linearGradient
        id={LinearGradientIds.linearGradient2}
        x1="81.09"
        y1="88.45"
        x2="81.09"
        y2="60.11"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
      <linearGradient
        id={LinearGradientIds.linearGradient3}
        x1="69.6"
        y1="88.45"
        x2="69.6"
        y2="60.11"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
      <linearGradient
        id={LinearGradientIds.linearGradient4}
        x1="115.95"
        y1="88.45"
        x2="115.95"
        y2="60.11"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
      <linearGradient
        id={LinearGradientIds.linearGradient5}
        x1="133.75"
        y1="88.45"
        x2="133.75"
        y2="60.11"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
      <linearGradient
        id={LinearGradientIds.linearGradient6}
        x1="100.38"
        y1="88.45"
        x2="100.38"
        y2="60.11"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
      <linearGradient
        id={LinearGradientIds.linearGradient7}
        x1="74.01"
        y1="62.23"
        x2="88.08"
        y2="62.23"
        xlinkHref={`#${LinearGradientIds.linearGradient}`}
      />
    </defs>
    <StyledText transform="translate(10.99 41.68) rotate(-15.52)">
      Justin and Marisa
      <tspan x="16.98" y="16.26">
        are getting
      </tspan>
    </StyledText>
    <GradientPath
      gradientId={LinearGradientIds.linearGradient}
      d="M85.43,71.09V81.83c0,3.62,2.23,7.39,7.89,6.84V84.58c-2.52.19-3.45-1.18-3.45-2.9V75.09H93v-4H89.87l0,0Z"
    />
    <GradientRect gradientId={LinearGradientIds.linearGradient2} x="78.85" y="71.09" width="4.47" height="17.58" />
    <GradientPath
      gradientId={LinearGradientIds.linearGradient3}
      d="M69.6,70.65a8.41,8.41,0,0,0-3.3.62v-8H61.84V88.67H66.3V77.53a3.24,3.24,0,0,1,3.41-2.47,3.06,3.06,0,0,1,3.22,3.23V88.67h4.44V78.06C77.37,75.36,75.67,70.65,69.6,70.65Z"
    />
    <GradientPath
      gradientId={LinearGradientIds.linearGradient4}
      d="M116,70.65a8.37,8.37,0,0,0-3.3.62V66.61h-4.47V88.67h4.47V77.53a3.22,3.22,0,0,1,3.4-2.47,3.06,3.06,0,0,1,3.22,3.23V88.67h4.44V78.06C123.71,75.36,122,70.65,116,70.65Z"
    />
    <GradientPath
      gradientId={LinearGradientIds.linearGradient5}
      d="M138.23,63.26v9.41a7.27,7.27,0,0,0-5.08-2c-3.4,0-8.38,3-8.38,9.47a8.93,8.93,0,0,0,9,9,9.07,9.07,0,0,0,9-9V63.26Zm-4.56,21.63a5.06,5.06,0,0,1-.15-10,4.78,4.78,0,0,1,4.66,5A4.63,4.63,0,0,1,133.67,84.89Z"
    />
    <GradientPath
      gradientId={LinearGradientIds.linearGradient6}
      d="M102.75,70.65c-4.55.22-8.38,3-8.38,9.47,0,4.85,3,9,9,9a7.74,7.74,0,0,0,3-.45V84.52a11.66,11.66,0,0,1-3.1.37c-1.52,0-4.42-1.09-4.42-5,0-3.7,2.66-4.95,4.26-5a7.31,7.31,0,0,1,3.26.5v-4A6.44,6.44,0,0,0,102.75,70.65Z"
    />
    <GradientPath
      gradientId={LinearGradientIds.linearGradient7}
      d="M87.21,60.93a5.24,5.24,0,0,0-2.57-2c-.74-2.38-3.64-3.63-6.5-2.8s-4.68,3.51-4,5.93a4.56,4.56,0,0,0,3.88,3.07,5.08,5.08,0,0,0,.57,1.08,5.23,5.23,0,0,0,3.25,2.15,5.07,5.07,0,0,0,1.15.13,5,5,0,0,0,5-3.85A4.81,4.81,0,0,0,87.21,60.93Zm-6.87,1.63a2.57,2.57,0,0,1,1.79-1.42,1.17,1.17,0,0,1-.12.2A3.63,3.63,0,0,1,80.34,62.56Zm-3.86-1.12c-.34-1.13.73-2.48,2.33-2.95a4.06,4.06,0,0,1,1.13-.16,3.07,3.07,0,0,1,1.68.46,4.9,4.9,0,0,0-3.77,3.71,1.22,1.22,0,0,0,0,.17A1.92,1.92,0,0,1,76.48,61.44Zm9.15,2.74a2.68,2.68,0,0,1-3.25,1.89A2.93,2.93,0,0,1,80.67,65h0A6,6,0,0,0,84,62.73a4.41,4.41,0,0,0,.59-1.11,2.71,2.71,0,0,1,.68.67A2.4,2.4,0,0,1,85.63,64.18Z"
    />
  </svg>
);
