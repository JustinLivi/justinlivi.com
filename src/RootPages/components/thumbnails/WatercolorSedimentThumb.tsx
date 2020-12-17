import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ProgressiveImage from 'react-progressive-image-loading';

import { ThumbnailContainer } from 'SharedComponents/DesignDetailsElements';
import {
  interactiveBaseStyle,
  interactiveFocusStyle,
  interactiveActiveStyle,
  interactiveHoverStyle,
} from 'styles/interactive';

import watercolorSedimentThumb from './watercolorSedimentThumb.jpg';
import watercolorSedimentThumbTiny from './watercolorSedimentThumbTiny.jpg';

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

export const WatercolorSedimentThumb: React.FunctionComponent = () => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <StyledLink to="generative-art/watercolor-sediment">
      <StyledSpan>
        <ProgressiveImage
          preview={watercolorSedimentThumbTiny}
          src={watercolorSedimentThumb}
          render={(src, style) => <ThumbnailContainer style={style} src={src} alt="watercolor sediment" />}
        />
        <StyledParagraph>watercolor sediment</StyledParagraph>
      </StyledSpan>
    </StyledLink>
  </Grid>
);
