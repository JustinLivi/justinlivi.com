import { Grid } from '@material-ui/core';
import classNames from 'classnames/bind';
import { CommunitySeed0 } from 'justinlivi-generative-art';
import * as React from 'react';

import styles from './CommunityDetailsPageStyles.module.scss';

const cx = classNames.bind(styles);

export interface CommunityDetailsPageProps {
  path: string;
}

export const CommunityDetailsPage: React.SFC<CommunityDetailsPageProps> = () => (
  <main>
    <Grid container>
      <CommunitySeed0 className={cx('sketch')} />
    </Grid>
  </main>
);
