import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import { color } from 'features/styles/colorThemes/colorTheme';
import { ColorToken } from 'features/styles/colorThemes/colorThemeTypes';

export const SquareGrid = styled(Grid).attrs({ item: true })`
  padding: 4%;
`;

export const DesignContainerDiv = styled.div`
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

export const ThumbnailContainer = styled.span`
  cursor: pointer;
  background-color: ${color(ColorToken.greyPrimary)};

  img {
    cursor: pointer;
    width: 100%;
  }
`;
