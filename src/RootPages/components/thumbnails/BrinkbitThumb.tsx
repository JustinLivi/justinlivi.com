import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { color } from 'styles/colorThemes/colorTheme';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import {
  interactiveHoverStyle,
  interactiveFocusStyle,
  interactiveActiveStyle,
  interactiveBaseStyle,
  interactiveBaseTiming,
  interactiveHoverTiming,
  interactiveFocusTiming,
  interactiveActiveTiming,
} from 'styles/interactive';

const Polygon = styled.polygon``;

const ThumbSpan = styled.span`
  display: block;
  cursor: pointer;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 40%;
  padding-right: 40%;
  margin-bottom: 1em;
  background-color: ${color(ColorToken.greyPrimary)};

  ${Polygon} {
    fill: ${color(ColorToken.greySecondary)};
    transition: fill ${interactiveBaseTiming};
  }
`;

const StyledParagraph = styled.p`
  display: contents;
  ${interactiveBaseStyle}
`;

const StyledLink = styled(Link)`
  &:focus {
    ${StyledParagraph} {
      ${interactiveFocusStyle}
    }

    ${Polygon} {
      fill: ${color(ColorToken.brinkbitBlue)};
      transition: fill ${interactiveFocusTiming};
    }
  }

  &:active {
    ${StyledParagraph} {
      ${interactiveActiveStyle}
    }

    ${Polygon} {
      fill: ${color(ColorToken.brinkbitBlue)};
      transition: fill ${interactiveActiveTiming};
    }
  }
`;

const StyledSpan = styled.span`
  &:hover {
    ${StyledParagraph} {
      ${interactiveHoverStyle}
    }

    ${Polygon} {
      fill: ${color(ColorToken.brinkbitBlue)};
      transition: fill ${interactiveHoverTiming};
    }
  }
`;

export const BrinkbitThumb: React.FunctionComponent = () => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <StyledLink to="design/brinkbit">
      <StyledSpan>
        <ThumbSpan role="link">
          <svg viewBox="0 -5.69 53.81 83.12">
            <Polygon points="17.94 17.94 17.94 0 0 0 0 71.75 35.88 71.75 35.88 53.81 17.94 53.81 17.94 35.88 35.88 35.88 35.88 53.81 53.81 53.81 53.81 17.94 17.94 17.94" />
          </svg>
        </ThumbSpan>
        <StyledParagraph>brinkbit</StyledParagraph>
      </StyledSpan>
    </StyledLink>
  </Grid>
);
