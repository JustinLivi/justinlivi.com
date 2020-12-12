import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';
import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components';

interface StyledFilledSvgProps {
  fillToken: ColorToken;
}

const fillInterop = ({ fillToken, theme }: ThemedStyledProps<StyledFilledSvgProps, DefaultTheme>) =>
  theme.colors[fillToken];

export const fillCss = css<StyledFilledSvgProps>`
  fill: ${fillInterop};
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
