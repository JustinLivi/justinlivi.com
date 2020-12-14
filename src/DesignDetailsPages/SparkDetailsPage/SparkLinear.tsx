import React from 'react';

import { FilledPath, GradientPath, GradientPolygon, StopColor } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';

enum SparkGradientIds {
  linearGradient = 'l-linear-gradient',
  linearGradient2 = 'l-linear-gradient2',
  linearGradient3 = 'l-linear-gradient3',
  linearGradient4 = 'l-linear-gradient4',
  linearGradient5 = 'l-linear-gradient5',
  linearGradient6 = 'l-linear-gradient6',
  linearGradient7 = 'l-linear-gradient7',
  linearGradient8 = 'l-linear-gradient8',
  linearGradient9 = 'l-linear-gradient9',
  linearGradient10 = 'l-linear-gradient10',
  linearGradient11 = 'l-linear-gradient11',
  linearGradient12 = 'l-linear-gradient12',
  linearGradient13 = 'l-linear-gradient13',
  linearGradient14 = 'l-linear-gradient14',
  linearGradient15 = 'l-linear-gradient15',
  linearGradient16 = 'l-linear-gradient16',
  linearGradient17 = 'l-linear-gradient17',
}

export const SparkLinear: React.FunctionComponent = () => (
  <svg viewBox="0 0 119.41 40.61">
    <defs>
      <linearGradient
        id={SparkGradientIds.linearGradient}
        x1="1.84"
        y1="28.99"
        x2="13.38"
        y2="28.99"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient1} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient2} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient2}
        x1="13.09"
        y1="37.34"
        x2="2.21"
        y2="29.77"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient3} />
        <StopColor offset="0.23" stopColorToken={ColorToken.sparkGradient4} />
        <StopColor offset="0.65" stopColorToken={ColorToken.sparkGradient5} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient6} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient3}
        x1="16.53"
        y1="27.03"
        x2="26.21"
        y2="31.46"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient4}
        x1="12.8"
        y1="36.78"
        x2="25.08"
        y2="36.49"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient5}
        x1="9.84"
        y1="24.47"
        x2="16.21"
        y2="26.9"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient7} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient8} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient6}
        x1="13.18"
        y1="10.61"
        x2="18.61"
        y2="18.43"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient7}
        x1="6.74"
        y1="19.79"
        x2="10.74"
        y2="19.79"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient8}
        x1="19.27"
        y1="26.38"
        x2="25.66"
        y2="26.38"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient9}
        x1="25.07"
        y1="15.34"
        x2="21.11"
        y2="22.25"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient10}
        x1="21.23"
        y1="12.25"
        x2="22.6"
        y2="10.58"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient11}
        x1="2.28"
        y1="24.9"
        x2="4.43"
        y2="20.32"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient12}
        x1="2.39"
        y1="24.95"
        x2="1.76"
        y2="19.91"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient13}
        x1="2.45"
        y1="18.65"
        x2="1.66"
        y2="16.49"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient14}
        x1="10.41"
        y1="20.5"
        x2="19.19"
        y2="21.04"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient15}
        x1="13.62"
        y1="0.46"
        x2="15.85"
        y2="11.94"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient16}
        x1="20.36"
        y1="14.23"
        x2="24.55"
        y2="14.23"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient17}
        x1="9.54"
        y1="10.94"
        x2="8.55"
        y2="17.34"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
    </defs>
    <g id="Content">
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient}
        points="9.97 24.2 1.84 30.2 13.38 33.79 9.97 24.2"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient2}
        points="1.84 30.2 12.4 40.61 12.4 40.61 13.38 33.79 1.84 30.2"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient3}
        points="25.66 32.66 19.27 20.1 13.38 33.79 25.66 32.66"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient4}
        points="13.38 33.79 12.4 40.61 25.66 32.66 13.38 33.79"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient5}
        points="9.97 24.2 19.27 20.1 13.38 33.79 9.97 24.2"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient6}
        points="10.74 16.8 17.02 6.44 19.27 20.1 10.74 16.8"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient7}
        points="9.97 24.2 6.74 15.39 10.74 16.8 9.97 24.2"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient8}
        points="19.27 20.1 24.61 21.51 25.66 32.66 19.27 20.1"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient9}
        points="19.27 20.1 26.07 15.49 24.61 21.51 19.27 20.1"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient10}
        points="21.51 12.46 20.74 8.22 24.55 12.83 21.51 12.46"
      />
      <GradientPath
        gradientId={SparkGradientIds.linearGradient11}
        d="M3.4,18.28a29.39,29.39,0,0,0,2.32,3.54l-3.14,3.3Z"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient12}
        points="2.58 25.12 0 20.62 3.4 18.28 2.58 25.12"
      />
      <GradientPolygon gradientId={SparkGradientIds.linearGradient13} points="0 20.62 3.4 12.57 3.4 18.28 0 20.62" />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient14}
        points="10.74 16.8 9.97 24.2 19.27 20.1 10.74 16.8"
      />
      <GradientPolygon gradientId={SparkGradientIds.linearGradient15} points="11.29 0 14.27 10.99 17.02 6.44 11.29 0" />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient16}
        points="21.51 12.46 20.36 16.01 24.55 12.83 21.51 12.46"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient17}
        points="9.8 10.57 6.74 15.39 10.74 16.8 9.8 10.57"
      />
      <FilledPath
        fillToken={ColorToken.sparkPrimary}
        d="M44.35,30.53a10.66,10.66,0,0,1-3.77-.67,10.25,10.25,0,0,1-3.33-2.06l1.8-2.14a10.68,10.68,0,0,0,2.5,1.65,6.94,6.94,0,0,0,2.87.57,3.74,3.74,0,0,0,2.21-.59,1.81,1.81,0,0,0,.81-1.55v0a1.94,1.94,0,0,0-.16-.82,1.85,1.85,0,0,0-.58-.67,4.89,4.89,0,0,0-1.17-.58,15.51,15.51,0,0,0-1.94-.53,20.4,20.4,0,0,1-2.43-.72,6.39,6.39,0,0,1-1.78-1A3.72,3.72,0,0,1,38.28,20a4.83,4.83,0,0,1-.37-2V18a4.54,4.54,0,0,1,.43-2,4.7,4.7,0,0,1,1.19-1.56,5.58,5.58,0,0,1,1.83-1A7.25,7.25,0,0,1,43.69,13a9.85,9.85,0,0,1,3.37.54,10,10,0,0,1,2.81,1.6l-1.6,2.26A10.41,10.41,0,0,0,46,16.12a6.32,6.32,0,0,0-2.31-.45,3.21,3.21,0,0,0-2,.58,1.8,1.8,0,0,0-.73,1.44v0a2.14,2.14,0,0,0,.17.87,1.72,1.72,0,0,0,.62.68,5.7,5.7,0,0,0,1.25.57c.53.18,1.2.37,2,.56a21.08,21.08,0,0,1,2.38.75,6.3,6.3,0,0,1,1.72,1,4,4,0,0,1,1,1.39,4.41,4.41,0,0,1,.36,1.84v0A5,5,0,0,1,50,27.59a4.64,4.64,0,0,1-1.24,1.6,5.51,5.51,0,0,1-1.91,1A8.71,8.71,0,0,1,44.35,30.53Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkPrimary}
        d="M54,13.39h6.66a8.23,8.23,0,0,1,2.67.4,5.67,5.67,0,0,1,2,1.15,5,5,0,0,1,1.28,1.78A5.82,5.82,0,0,1,67.06,19v.05a5.51,5.51,0,0,1-.54,2.5,5,5,0,0,1-1.45,1.8,6.52,6.52,0,0,1-2.15,1.1,9,9,0,0,1-2.64.37H56.92v5.43H54Zm6.41,8.79a4,4,0,0,0,2.68-.85,2.75,2.75,0,0,0,1-2.18v0a2.66,2.66,0,0,0-1-2.26,4.3,4.3,0,0,0-2.67-.77H56.92v6.11Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkPrimary}
        d="M75.69,11.71,84.11,30.4h-3l-1.64-4.11H71.83L70.17,30.4H67.26Zm2.74,12.07-2.79-6.46-2.77,6.46Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkPrimary}
        d="M86.76,13.39h7.53a8.28,8.28,0,0,1,2.83.45,5.74,5.74,0,0,1,2,1.24,5.11,5.11,0,0,1,1,1.62,5.51,5.51,0,0,1,.36,2v.05a5.52,5.52,0,0,1-.3,1.87,4.85,4.85,0,0,1-.84,1.47,4.91,4.91,0,0,1-1.26,1.09,7.2,7.2,0,0,1-1.63.69l4.56,6.39H97.6L93.43,24.4H89.7v5.89H86.76Zm7.3,8.38A3.93,3.93,0,0,0,96.61,21a2.53,2.53,0,0,0,.94-2.08v-.05a2.48,2.48,0,0,0-.92-2.09A4.11,4.11,0,0,0,94,16.07H89.7v5.7Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkPrimary}
        d="M104.43,13.36h2.95v8.51l8.06-8.51h3.65l-7,7.28,7.36,9.65H115.8L110,22.67l-2.64,2.71v4.91h-2.95Z"
      />
    </g>
  </svg>
);
