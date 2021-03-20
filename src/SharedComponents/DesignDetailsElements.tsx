import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const SquareGrid = styled(Grid).attrs({ item: true })`
  padding: 4%;
`;

export const DesignContainerDiv = styled.div`
  padding-top: 30vh;
  padding-bottom: 30vh;
`;

export const ThumbnailContainer = styled.img.attrs({
  width: 950,
  height: 534,
})`
  cursor: pointer;
  width: 100%;
  height: 0%;
  border-bottom: none;
`;
