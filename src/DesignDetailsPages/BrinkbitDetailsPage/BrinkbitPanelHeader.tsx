import React from 'react';
import Grid from '@material-ui/core/Grid';

import { FilledPolygon } from 'SharedComponents/SvgElements';
import { ColorToken } from 'styles/colorThemes/colorThemeTypes';
import { DesignContainerDiv } from 'SharedComponents/DesignDetailsElements';

export const BrinkbitPanelHeader = () => (
  <Grid container={true} justify="center">
    <Grid item={true} xs={3} sm={2} md={1}>
      <DesignContainerDiv>
        <svg viewBox="0 0 36.06 48.08">
          <FilledPolygon
            fillToken={ColorToken.brinkbitBlue}
            points="12.02 12.02 12.02 0 0 0 0 48.08 24.04 48.08 24.04 36.06 12.02 36.06 12.02 24.04 24.04 24.04 24.04 36.06 36.06 36.06 36.06 12.02 12.02 12.02"
          />
        </svg>
      </DesignContainerDiv>
    </Grid>
  </Grid>
);
