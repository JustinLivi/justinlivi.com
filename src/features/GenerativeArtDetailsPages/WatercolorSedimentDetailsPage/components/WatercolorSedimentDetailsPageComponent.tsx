import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { WatercolorSedimentSeed0 } from 'justinlivi-generative-art';
import * as React from 'react';

import styles from './WatercolorSedimentDetailsPageStyles.module.scss';

const cx = classNames.bind(styles);

export interface WatercolorSedimentDetailsPageProps {
  path: string;
}

export const WatercolorSedimentDetailsPage: React.SFC<WatercolorSedimentDetailsPageProps> = () => (
  <main>
    <Grid container>
      <WatercolorSedimentSeed0 className={cx('sketch')} />
    </Grid>
  </main>
);
