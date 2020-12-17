import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ProgressiveImage from 'react-progressive-image';

import { ThumbnailContainer } from 'SharedComponents/DesignDetailsElements';
import {
  interactiveBaseStyle,
  interactiveFocusStyle,
  interactiveActiveStyle,
  interactiveHoverStyle,
} from 'styles/interactive';

import communityThumbTiny from './communityThumbTiny.png';
import communityThumb from './communityThumb.png';

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

export const CommunityThumb: React.FunctionComponent = () => (
  <Grid item={true} xs={12} sm={6} lg={3}>
    <StyledLink to="generative-art/community">
      <StyledSpan>
        <ProgressiveImage placeholder={communityThumbTiny} src={communityThumb}>
          {(src: string) => <ThumbnailContainer src={src} alt="community" />}
        </ProgressiveImage>
        <StyledParagraph>community</StyledParagraph>
      </StyledSpan>
    </StyledLink>
  </Grid>
);
