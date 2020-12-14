import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';

import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';
import { color } from 'features/styles/colorThemes/colorTheme';

interface StyledFilledSvgProps {
  fillToken: ColorToken;
}

interface StyledStopColorProps {
  stopColorToken: ColorToken;
}

interface StyledGradientProps {
  gradientId: string;
}

export interface FilledOrGradientProps {
  useGradient?: boolean;
  fillToken: ColorToken;
  gradientId: string;
}

const fillInterop = ({ fillToken, theme }: ThemedStyledProps<StyledFilledSvgProps, DefaultTheme>) =>
  theme.colors[fillToken];

const gradientInterop = ({ gradientId }: ThemedStyledProps<StyledGradientProps, DefaultTheme>) => `url(#${gradientId})`;

const fillOrGradientInterop = ({
  gradientId,
  fillToken,
  theme,
  useGradient,
}: ThemedStyledProps<FilledOrGradientProps, DefaultTheme>) =>
  useGradient ? `url(#${gradientId})` : theme.colors[fillToken];

export const fillCss = css<StyledFilledSvgProps>`
  fill: ${fillInterop};
`;

export const gradientCss = css<StyledGradientProps>`
  fill: ${gradientInterop};
`;

export const fillOrGradientCss = css<FilledOrGradientProps>`
  fill: ${fillOrGradientInterop};
`;

export const FilledPath = styled.path<StyledFilledSvgProps>`
  ${fillCss}
`;

export const FilledPolygon = styled.polygon<StyledFilledSvgProps>`
  ${fillCss}
`;

export const FilledRect = styled.rect<StyledFilledSvgProps>`
  ${fillCss}
`;

export const GradientPath = styled.path<StyledGradientProps>`
  ${gradientCss}
`;

export const GradientPolygon = styled.polygon<StyledGradientProps>`
  ${gradientCss}
`;

export const GradientRect = styled.rect<StyledGradientProps>`
  ${gradientCss}
`;

export const StopColor = styled.stop.attrs<StyledStopColorProps>(({ stopColorToken, theme }) => ({
  stopColor: color(stopColorToken)({ theme }),
}))<StyledStopColorProps>``;
