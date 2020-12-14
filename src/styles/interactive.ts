import { css } from 'styled-components';

const width = '0.1rem';

export const interactiveStyle = css`
  text-decoration: none;
  background: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;

  transition: border-bottom-color 300ms;
  border: 0;
  border-bottom-width: ${width};
  border-bottom-color: rgba(69, 67, 79, 0);
  border-bottom-style: solid;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: none;
  }

  &:focus,
  &:hover {
    transition: border-bottom-color 200ms;
    border-bottom-color: rgba(69, 67, 79, 0.8);
  }

  &:active {
    transition: border-bottom-color 100ms;
    border-bottom-color: rgba(69, 67, 79, 1);
    outline: none;
  }

  &[disabled] {
    cursor: initial;
    color: inherit;

    &:hover,
    &:focus,
    &:active {
      outline: none;
      background: none;
      border-bottom-color: rgba(69, 67, 79, 0);
    }

    &:active {
      border-bottom-color: rgba(69, 67, 79, 0);
      outline: none;
    }
  }
`;