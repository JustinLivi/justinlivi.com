import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { CommunityThumb } from 'features/RootPages/components/CommunityThumb/CommunityThumbComponent';
import { DesignCard } from 'features/RootPages/components/DesignCard/DesignCardComponent';
import {
  WatercolorSedimentThumb,
} from 'features/RootPages/components/WatercolorSedimentThumb/WatercolorSedimentThumbComponent';
import React from 'react';

import styles from './GenerativeArtPageStyles.module.scss';

const cx = classNames.bind(styles);

export interface GenerativeArtPageProps {
  path: string;
}

export const GenerativeArtPage: React.SFC<GenerativeArtPageProps> = () => (
  <main className={cx('main')}>
    <Grid container spacing={3}>
      <DesignCard thumb={<CommunityThumb />} target="./community" title="community" />
      <DesignCard thumb={<WatercolorSedimentThumb />} target="./watercolor-sediment" title="watercolor sediment" />
    </Grid>
  </main>
);
