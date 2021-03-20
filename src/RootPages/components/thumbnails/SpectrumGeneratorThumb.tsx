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

import spectrumGeneratorThumb from './spectrumGeneratorThumb.jpg';
import spectrumGeneratorThumbTiny from './spectrumGeneratorThumbTiny.jpg';

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

export const SpectrumGeneratorThumb: React.FunctionComponent = () => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <StyledLink to="generative-art/spectrum-generator">
      <StyledSpan>
        <ProgressiveImage placeholder={spectrumGeneratorThumbTiny} src={spectrumGeneratorThumb}>
          {(src: string) => <ThumbnailContainer src={src} alt="spectrum generator" />}
        </ProgressiveImage>
        <StyledParagraph>spectrum generator</StyledParagraph>
      </StyledSpan>
    </StyledLink>
  </Grid>
);
