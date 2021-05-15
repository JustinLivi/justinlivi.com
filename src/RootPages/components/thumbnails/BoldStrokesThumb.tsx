import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProgressiveImage from 'react-progressive-image';

import { ThumbnailContainer } from 'SharedComponents/DesignDetailsElements';
import {
  interactiveBaseStyle,
  interactiveFocusStyle,
  interactiveActiveStyle,
  interactiveHoverStyle,
} from 'styles/interactive';

import boldStrokesThumb from './boldStrokesThumb.jpg';
import boldStrokesThumbTiny from './boldStrokesThumbTiny.jpg';

const StyledParagraph = styled.p`
  display: inline-block;
  border-bottom: solid;
  ${interactiveBaseStyle}
`;

const StyledLink = styled(Link)`
  &:focus {
    ${StyledParagraph} {
      ${interactiveFocusStyle}
    }
  }

  &:active {
    ${StyledParagraph} {
      ${interactiveActiveStyle}
    }
  }
`;

const StyledSpan = styled.span`
  display: block;
  &:hover {
    ${StyledParagraph} {
      ${interactiveHoverStyle}
    }
  }
`;

export const BoldStrokesThumb: React.FunctionComponent = () => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <StyledLink to="generative-art/bold-strokes">
      <StyledSpan>
        <ProgressiveImage placeholder={boldStrokesThumbTiny} src={boldStrokesThumb}>
          {(src: string) => <ThumbnailContainer src={src} alt="bold strokes" />}
        </ProgressiveImage>
        <StyledParagraph>bold strokes</StyledParagraph>
      </StyledSpan>
    </StyledLink>
  </Grid>
);
