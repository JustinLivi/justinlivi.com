import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { toggleColorTheme } from 'App/state/actions';
import { colorThemeSelector } from 'App/state/rootSelectors';
import { ColorThemeId } from 'styles/colorThemes/colorThemeTypes';

const StyledButton = styled.button``;

export const ColorThemeToggle: React.FunctionComponent = () => {
  const colorTheme = useSelector(colorThemeSelector);
  const dispatch = useDispatch();
  return (
    <StyledButton
      onClick={() => {
        dispatch(toggleColorTheme());
      }}
    >
      {colorTheme === ColorThemeId.dark ? 'light' : 'dark'}
    </StyledButton>
  );
};
