import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const SquareGrid = styled(Grid).attrs({ item: true })`
  padding: 4%;
`;

export const DesignContainerDiv = styled.div`
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

export const ThumbnailContainer = styled.img`
  cursor: pointer;
  width: 100%;
  border-bottom: none;
`;
