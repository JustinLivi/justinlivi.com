import React from 'react';

import {
  FilledPath,
  FilledRect,
  GradientPath,
  GradientPolygon,
  StopColor,
} from 'features/SharedComponents/SvgElements';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

export interface SparkFullSquareProps {
  backgroundColorToken: ColorToken;
}

enum SparkGradientIds {
  linearGradient = 'fsc-linear-gradient',
  linearGradient2 = 'fsc-linear-gradient2',
  linearGradient3 = 'fsc-linear-gradient3',
  linearGradient4 = 'fsc-linear-gradient4',
  linearGradient5 = 'fsc-linear-gradient5',
  linearGradient6 = 'fsc-linear-gradient6',
  linearGradient7 = 'fsc-linear-gradient7',
  linearGradient8 = 'fsc-linear-gradient8',
  linearGradient9 = 'fsc-linear-gradient9',
  linearGradient10 = 'fsc-linear-gradient10',
  linearGradient11 = 'fsc-linear-gradient11',
  linearGradient12 = 'fsc-linear-gradient12',
  linearGradient13 = 'fsc-linear-gradient13',
  linearGradient14 = 'fsc-linear-gradient14',
  linearGradient15 = 'fsc-linear-gradient15',
  linearGradient16 = 'fsc-linear-gradient16',
  linearGradient17 = 'fsc-linear-gradient17',
}

export const SparkFullSquare: React.FunctionComponent<SparkFullSquareProps> = ({ backgroundColorToken }) => (
  <svg viewBox="0 0 133.19 137.27">
    <defs>
      <linearGradient
        id={SparkGradientIds.linearGradient}
        x1="54.62"
        y1="55.3"
        x2="65.95"
        y2="55.3"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient1} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient2} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient2}
        x1="65.66"
        y1="63.49"
        x2="54.99"
        y2="56.06"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient3} />
        <StopColor offset="0.23" stopColorToken={ColorToken.sparkGradient4} />
        <StopColor offset="0.65" stopColorToken={ColorToken.sparkGradient5} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient6} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient3}
        x1="69.04"
        y1="53.38"
        x2="78.54"
        y2="57.72"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient4}
        x1="65.38"
        y1="62.95"
        x2="77.43"
        y2="62.65"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient5}
        x1="62.47"
        y1="50.86"
        x2="68.73"
        y2="53.24"
        gradientUnits="userSpaceOnUse"
      >
        <StopColor offset="0" stopColorToken={ColorToken.sparkGradient7} />
        <StopColor offset="1" stopColorToken={ColorToken.sparkGradient8} />
      </linearGradient>
      <linearGradient
        id={SparkGradientIds.linearGradient6}
        x1="65.75"
        y1="37.25"
        x2="71.09"
        y2="44.93"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient7}
        x1="59.43"
        y1="46.27"
        x2="63.36"
        y2="46.27"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient8}
        x1="71.73"
        y1="52.73"
        x2="78"
        y2="52.73"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient9}
        x1="77.43"
        y1="41.89"
        x2="73.54"
        y2="48.68"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient10}
        x1="73.65"
        y1="38.87"
        x2="75"
        y2="37.22"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient11}
        x1="55.05"
        y1="51.28"
        x2="57.16"
        y2="46.79"
        xlinkHref={`#${SparkGradientIds.linearGradient}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient12}
        x1="55.16"
        y1="51.33"
        x2="54.54"
        y2="46.39"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient13}
        x1="55.22"
        y1="45.14"
        x2="54.44"
        y2="43.03"
        xlinkHref={`#${SparkGradientIds.linearGradient5}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient14}
        x1="63.03"
        y1="46.96"
        x2="71.66"
        y2="47.49"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient15}
        x1="66.18"
        y1="27.29"
        x2="68.38"
        y2="38.55"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient16}
        x1="72.8"
        y1="40.81"
        x2="76.91"
        y2="40.81"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
      <linearGradient
        id={SparkGradientIds.linearGradient17}
        x1="62.18"
        y1="37.58"
        x2="61.2"
        y2="43.86"
        xlinkHref={`#${SparkGradientIds.linearGradient2}`}
      />
    </defs>
    <g id="Content">
      <FilledRect fillToken={backgroundColorToken} width="133.19" height="137.27" />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient}
        points="62.61 50.59 54.62 56.48 65.95 60.01 62.61 50.59"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient2}
        points="54.62 56.48 64.99 66.7 64.99 66.7 65.95 60.01 54.62 56.48"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient3}
        points="78 58.89 71.73 46.56 65.95 60.01 78 58.89"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient4}
        points="65.95 60.01 64.99 66.7 78 58.89 65.95 60.01"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient5}
        points="62.61 50.59 71.73 46.56 65.95 60.01 62.61 50.59"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient6}
        points="63.36 43.33 69.52 33.16 71.73 46.56 63.36 43.33"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient7}
        points="62.61 50.59 59.43 41.94 63.36 43.33 62.61 50.59"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient8}
        points="71.73 46.56 76.97 47.95 78 58.89 71.73 46.56"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient9}
        points="71.73 46.56 78.41 42.04 76.97 47.95 71.73 46.56"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient10}
        points="73.93 39.06 73.17 34.9 76.91 39.43 73.93 39.06"
      />
      <GradientPath gradientId={SparkGradientIds.linearGradient11} d="M56.15,44.79a29,29,0,0,0,2.28,3.47L55.34,51.5Z" />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient12}
        points="55.34 51.5 52.81 47.08 56.15 44.79 55.34 51.5"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient13}
        points="52.81 47.08 56.15 39.18 56.15 44.79 52.81 47.08"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient14}
        points="63.36 43.33 62.61 50.59 71.73 46.56 63.36 43.33"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient15}
        points="63.9 26.84 66.83 37.63 69.52 33.16 63.9 26.84"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient16}
        points="73.93 39.06 72.8 42.56 76.91 39.43 73.93 39.06"
      />
      <GradientPolygon
        gradientId={SparkGradientIds.linearGradient17}
        points="62.43 37.22 59.43 41.94 63.36 43.33 62.43 37.22"
      />
      <FilledPath
        fillToken={ColorToken.sparkGreyPrimary}
        d="M34.58,104.06a10.45,10.45,0,0,1-3.7-.66,10,10,0,0,1-3.27-2l1.76-2.1a10.07,10.07,0,0,0,2.46,1.61,6.7,6.7,0,0,0,2.82.57,3.64,3.64,0,0,0,2.16-.58,1.79,1.79,0,0,0,.8-1.53v0a1.84,1.84,0,0,0-.16-.8,1.71,1.71,0,0,0-.57-.66,4.24,4.24,0,0,0-1.15-.57,16.47,16.47,0,0,0-1.9-.53,17.53,17.53,0,0,1-2.38-.7,6.18,6.18,0,0,1-1.75-1,3.7,3.7,0,0,1-1.08-1.37,4.63,4.63,0,0,1-.37-2v0a4.54,4.54,0,0,1,1.6-3.5,5.53,5.53,0,0,1,1.79-1,7,7,0,0,1,2.29-.36,9.54,9.54,0,0,1,3.31.54A9.74,9.74,0,0,1,40,89l-1.58,2.22a10.24,10.24,0,0,0-2.27-1.28,6.23,6.23,0,0,0-2.27-.44,3.13,3.13,0,0,0-2,.57,1.76,1.76,0,0,0-.72,1.41v0a2.08,2.08,0,0,0,.17.85,1.66,1.66,0,0,0,.61.67,5.42,5.42,0,0,0,1.22.56c.52.17,1.18.36,2,.55a18.91,18.91,0,0,1,2.33.74,5.84,5.84,0,0,1,1.69,1,3.93,3.93,0,0,1,1,1.36,4.41,4.41,0,0,1,.35,1.8v0a4.9,4.9,0,0,1-.44,2.1,4.39,4.39,0,0,1-1.22,1.57,5.29,5.29,0,0,1-1.87,1A8.07,8.07,0,0,1,34.58,104.06Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkGreyPrimary}
        d="M44,87.24h6.54a8.33,8.33,0,0,1,2.62.39,5.62,5.62,0,0,1,2,1.13,5,5,0,0,1,1.25,1.75,5.57,5.57,0,0,1,.44,2.27v0a5.42,5.42,0,0,1-.52,2.45,5,5,0,0,1-1.43,1.77,6.47,6.47,0,0,1-2.11,1.08,9.06,9.06,0,0,1-2.59.37h-3.3v5.33H44Zm6.29,8.62A3.88,3.88,0,0,0,52.94,95a2.7,2.7,0,0,0,1-2.14v0a2.63,2.63,0,0,0-1-2.22,4.17,4.17,0,0,0-2.61-.75h-3.4v6Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkGreyPrimary}
        d="M65.33,85.59l8.27,18.34H70.65L69,99.9H61.55l-1.63,4H57.06ZM68,97.43l-2.74-6.34-2.72,6.34Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkGreyPrimary}
        d="M76.2,87.24h7.39a8.13,8.13,0,0,1,2.77.44,5.57,5.57,0,0,1,2,1.22,4.92,4.92,0,0,1,1,1.59,5.51,5.51,0,0,1,.35,2v0a5.3,5.3,0,0,1-.3,1.84,4.77,4.77,0,0,1-.81,1.45,5.13,5.13,0,0,1-1.25,1.06,6.22,6.22,0,0,1-1.6.68l4.48,6.28H86.84l-4.09-5.78H79.09v5.78H76.2Zm7.17,8.22a3.85,3.85,0,0,0,2.49-.75,2.47,2.47,0,0,0,.93-2v-.05a2.46,2.46,0,0,0-.9-2.06,4.07,4.07,0,0,0-2.55-.7H79.09v5.59Z"
      />
      <FilledPath
        fillToken={ColorToken.sparkGreyPrimary}
        d="M93.54,87.21h2.9v8.35l7.91-8.35h3.58L101,94.35l7.22,9.48H104.7L99,96.35,96.44,99v4.82h-2.9Z"
      />
    </g>
  </svg>
);
