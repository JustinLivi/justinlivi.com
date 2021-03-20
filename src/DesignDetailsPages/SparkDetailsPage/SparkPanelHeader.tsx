import Grid from '@material-ui/core/Grid';
import React from 'react';

import { GradientPath, GradientPolygon, StopColor } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';

enum SparkGradientIds {
  linearGradient = 'linear-gradient',
  linearGradient2 = 'linear-gradient2',
  linearGradient3 = 'linear-gradient3',
  linearGradient4 = 'linear-gradient4',
  linearGradient5 = 'linear-gradient5',
  linearGradient6 = 'linear-gradient6',
  linearGradient7 = 'linear-gradient7',
  linearGradient8 = 'linear-gradient8',
  linearGradient9 = 'linear-gradient9',
  linearGradient10 = 'linear-gradient10',
  linearGradient11 = 'linear-gradient11',
  linearGradient12 = 'linear-gradient12',
  linearGradient13 = 'linear-gradient13',
  linearGradient14 = 'linear-gradient14',
  linearGradient15 = 'linear-gradient15',
  linearGradient16 = 'linear-gradient16',
  linearGradient17 = 'linear-gradient17',
}

export const SparkPanelHeader: React.FunctionComponent = () => (
  <Grid container={true} justify="center">
    <Grid item={true} xs={3} sm={2} md={1}>
      <DesignContainerDiv>
        <svg viewBox="0 0 50.4 78.49">
          <defs>
            <linearGradient
              id={SparkGradientIds.linearGradient}
              x1="3.55"
              y1="56.04"
              x2="25.86"
              y2="56.04"
              gradientUnits="userSpaceOnUse"
            >
              <StopColor offset="0" stopColorToken={ColorToken.sparkGradient1} />
              <StopColor offset="1" stopColorToken={ColorToken.sparkGradient2} />
            </linearGradient>
            <linearGradient
              id={SparkGradientIds.linearGradient2}
              x1="25.3"
              y1="72.17"
              x2="4.28"
              y2="57.54"
              gradientUnits="userSpaceOnUse"
            >
              <StopColor offset="0" stopColorToken={ColorToken.sparkGradient3} />
              <StopColor offset="0.23" stopColorToken={ColorToken.sparkGradient4} />
              <StopColor offset="0.65" stopColorToken={ColorToken.sparkGradient5} />
              <StopColor offset="1" stopColorToken={ColorToken.sparkGradient6} />
            </linearGradient>
            <linearGradient
              id={SparkGradientIds.linearGradient3}
              x1="31.95"
              y1="52.25"
              x2="50.66"
              y2="60.8"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient4}
              x1="24.74"
              y1="71.1"
              x2="48.47"
              y2="70.52"
              xlinkHref={`#${SparkGradientIds.linearGradient}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient5}
              x1="19.01"
              y1="47.29"
              x2="31.33"
              y2="51.99"
              gradientUnits="userSpaceOnUse"
            >
              <StopColor offset="0" stopColorToken={ColorToken.sparkGradient7} />
              <StopColor offset="1" stopColorToken={ColorToken.sparkGradient8} />
            </linearGradient>
            <linearGradient
              id={SparkGradientIds.linearGradient6}
              x1="25.47"
              y1="20.5"
              x2="35.98"
              y2="35.62"
              xlinkHref={`#${SparkGradientIds.linearGradient5}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient7}
              x1="13.02"
              y1="38.26"
              x2="20.76"
              y2="38.26"
              xlinkHref={`#${SparkGradientIds.linearGradient5}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient8}
              x1="37.25"
              y1="50.98"
              x2="49.59"
              y2="50.98"
              xlinkHref={`#${SparkGradientIds.linearGradient}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient9}
              x1="48.46"
              y1="29.65"
              x2="40.81"
              y2="43"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient10}
              x1="41.03"
              y1="23.68"
              x2="43.68"
              y2="20.44"
              xlinkHref={`#${SparkGradientIds.linearGradient5}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient11}
              x1="4.41"
              y1="48.13"
              x2="8.56"
              y2="39.28"
              xlinkHref={`#${SparkGradientIds.linearGradient}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient12}
              x1="4.61"
              y1="48.23"
              x2="3.39"
              y2="38.49"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient13}
              x1="4.74"
              y1="36.04"
              x2="3.21"
              y2="31.87"
              xlinkHref={`#${SparkGradientIds.linearGradient5}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient14}
              x1="20.12"
              y1="39.63"
              x2="37.1"
              y2="40.67"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient15}
              x1="26.32"
              y1="0.88"
              x2="30.64"
              y2="23.07"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient16}
              x1="39.35"
              y1="27.51"
              x2="47.45"
              y2="27.51"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
            <linearGradient
              id={SparkGradientIds.linearGradient17}
              x1="18.43"
              y1="21.14"
              x2="16.52"
              y2="33.51"
              xlinkHref={`#${SparkGradientIds.linearGradient2}`}
            />
          </defs>
          <g id="Content">
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient}
              points="19.28 46.78 3.55 58.37 25.86 65.31 19.28 46.78"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient2}
              points="3.55 58.37 23.97 78.49 23.97 78.49 25.86 65.31 3.55 58.37"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient3}
              points="49.59 63.12 37.25 38.84 25.86 65.31 49.59 63.12"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient4}
              points="25.86 65.31 23.97 78.49 49.59 63.12 25.86 65.31"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient5}
              points="19.28 46.78 37.25 38.84 25.86 65.31 19.28 46.78"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient6}
              points="20.76 32.47 32.9 12.44 37.25 38.84 20.76 32.47"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient7}
              points="19.28 46.78 13.02 29.74 20.76 32.47 19.28 46.78"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient8}
              points="37.25 38.84 47.57 41.57 49.59 63.12 37.25 38.84"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient9}
              points="37.25 38.84 50.4 29.94 47.57 41.57 37.25 38.84"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient10}
              points="41.57 24.07 40.08 15.88 47.45 24.79 41.57 24.07"
            />
            <GradientPath
              gradientId={SparkGradientIds.linearGradient11}
              d="M6.56,35.34c0,.71,4.49,6.84,4.49,6.84L5,48.55Z"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient12}
              points="4.98 48.55 0 39.85 6.56 35.34 4.98 48.55"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient13}
              points="0 39.85 6.56 24.3 6.56 35.34 0 39.85"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient14}
              points="20.76 32.47 19.28 46.78 37.25 38.84 20.76 32.47"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient15}
              points="21.82 0 27.59 21.24 32.9 12.44 21.82 0"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient16}
              points="41.57 24.07 39.35 30.95 47.45 24.79 41.57 24.07"
            />
            <GradientPolygon
              gradientId={SparkGradientIds.linearGradient17}
              points="18.94 20.43 13.02 29.74 20.76 32.47 18.94 20.43"
            />
          </g>
        </svg>
      </DesignContainerDiv>
    </Grid>
  </Grid>
);
