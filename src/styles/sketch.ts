import { css } from 'styled-components';

export const sketchStyle = css`
  margin-top: 30px;

  canvas {
    max-width: calc(100vw - 5rem);
    height: calc((100vw - 5rem) * (9 / 16));
    max-height: calc(100vh - 25rem);
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    display: block;
  }

  button {
    margin-left: 2.5rem;
    margin-top: 2rem;
  }
`;
