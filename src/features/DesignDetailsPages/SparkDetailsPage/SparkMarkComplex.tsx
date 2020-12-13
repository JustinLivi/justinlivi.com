import React from 'react';

import { FilledRect, GradientPath, GradientPolygon, StopColor } from 'features/SharedComponents/SvgElements';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

enum SparkGradientIds {
  linearGradient = 'grey-linear-gradient',
  linearGradient2 = 'grey-linear-gradient2',
  linearGradient3 = 'grey-linear-gradient3',
  linearGradient4 = 'grey-linear-gradient4',
  linearGradient5 = 'grey-linear-gradient5',
  linearGradient6 = 'grey-linear-gradient6',
  linearGradient7 = 'grey-linear-gradient7',
  linearGradient8 = 'grey-linear-gradient8',
  linearGradient9 = 'grey-linear-gradient9',
  linearGradient10 = 'grey-linear-gradient10',
  linearGradient11 = 'grey-linear-gradient11',
  linearGradient12 = 'grey-linear-gradient12',
  linearGradient13 = 'grey-linear-gradient13',
  linearGradient14 = 'grey-linear-gradient14',
  linearGradient15 = 'grey-linear-gradient15',
  linearGradient16 = 'grey-linear-gradient16',
  linearGradient17 = 'grey-linear-gradient17',
}

export const SparkMarkComplex = () => (
  <svg viewBox="0 0 81.19 83.66">
    <defs>
      <linearGradient
        id={SparkGradientIds.linearGradient}
        x1="29.59"
        y1="49.07"
        x2="40.6"
        y2="49.07"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGreyGradient1} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGreyGradient2} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient2}
        x1="40.32"
        y1="57.02"
        x2="29.95"
        y2="49.8"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGreyGradient3} />
        <StopColor offset="0.22" stopColorToken={ColorToken.sparkGreyGradient4} />
        <StopColor offset="0.61" stopColorToken={ColorToken.sparkGreyGradient5} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGreyGradient6} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient3}
        x1="43.6"
        y1="47.2"
        x2="52.82"
        y2="51.41"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient4}
        x1="40.04"
        y1="56.49"
        x2="51.75"
        y2="56.21"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient5}
        x1="37.22"
        y1="44.75"
        x2="43.29"
        y2="47.07"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGreyGradient7} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGreyGradient8} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient6}
        x1="40.4"
        y1="31.54"
        x2="45.58"
        y2="38.99"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient7}
        x1="34.26"
        y1="40.3"
        x2="38.08"
        y2="40.3"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient8}
        x1="46.21"
        y1="46.57"
        x2="52.3"
        y2="46.57"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient9}
        x1="51.74"
        y1="36.05"
        x2="47.97"
        y2="42.63"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient10}
        x1="48.07"
        y1="33.11"
        x2="49.38"
        y2="31.51"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient11}
        x1="30.01"
        y1="45.17"
        x2="32.07"
        y2="40.8"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient12}
        x1="30.12"
        y1="45.21"
        x2="29.52"
        y2="40.41"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient13}
        x1="30.18"
        y1="39.2"
        x2="29.42"
        y2="37.15"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient14}
        x1="37.76"
        y1="40.97"
        x2="46.14"
        y2="41.49"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient15}
        x1="40.82"
        y1="21.86"
        x2="42.95"
        y2="32.81"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient16}
        x1="47.25"
        y1="35"
        x2="51.24"
        y2="35"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient17}
        x1="36.93"
        y1="31.86"
        x2="35.99"
        y2="37.96"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
    </defs>
    <g id="Content">
      <FilledRect fillToken={ColorToken.sparkSecondary} width="81.19" height="83.66" />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient}
        points="37.35 44.5 29.59 50.21 40.6 53.64 37.35 44.5"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient2}
        points="29.59 50.21 39.66 60.14 39.66 60.14 40.6 53.64 29.59 50.21"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient3}
        points="52.3 52.56 46.21 40.59 40.6 53.64 52.3 52.56"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient4}
        points="40.6 53.64 39.66 60.14 52.3 52.56 40.6 53.64"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient5}
        points="37.35 44.5 46.21 40.59 40.6 53.64 37.35 44.5"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient6}
        points="38.08 37.44 44.07 27.57 46.21 40.59 38.08 37.44"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient7}
        points="37.35 44.5 34.26 36.09 38.08 37.44 37.35 44.5"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient8}
        points="46.21 40.59 51.3 41.93 52.3 52.56 46.21 40.59"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient9}
        points="46.21 40.59 52.7 36.2 51.3 41.93 46.21 40.59"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient10}
        points="48.34 33.3 47.61 29.26 51.24 33.66 48.34 33.3"
      />
      <GradientPath
        gradientId={SparkGradientIds.linearGradient11}
        d="M31.08,38.86a28.16,28.16,0,0,0,2.21,3.37l-3,3.14Z"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient12}
        points="30.3 45.37 27.84 41.08 31.08 38.86 30.3 45.37"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient13}
        points="27.84 41.08 31.08 33.41 31.08 38.86 27.84 41.08"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient14}
        points="38.08 37.44 37.35 44.5 46.21 40.59 38.08 37.44"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient15}
        points="38.6 21.43 41.45 31.91 44.07 27.57 38.6 21.43"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient16}
        points="48.34 33.3 47.25 36.69 51.24 33.66 48.34 33.3"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient17}
        points="37.18 31.51 34.26 36.09 38.08 37.44 37.18 31.51"
      />
    </g>
  </svg>
);
