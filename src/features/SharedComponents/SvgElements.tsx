import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';
import styled, { css } from 'styled-components';

interface StyledFilledSvgProps {
  fillToken: ColorToken;
}

export const fillCss = css<StyledFilledSvgProps>`
  fill: ${({ fillToken, theme }) => theme.colors[fillToken]}
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