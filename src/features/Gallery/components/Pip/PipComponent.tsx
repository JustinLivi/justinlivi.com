import { createStyles, WithStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames/bind';
import { merge } from 'lodash';
import React from 'react';

import { HexagonComponent } from '../Hexagon/HexagonComponent';
import { LinkContainer } from '../Link/LinkContainer';
import styles from './PipStyle.module.scss';

export interface PipParentProps {
  percent: number;
  link: string;
}

const dynamicStyles = createStyles({
  scale: {
    transform: ({ percent }: PipParentProps) =>
      `scale3d(${percent},${percent},1)`,
    strokeWidth: ({ percent }: PipParentProps) => `${9 / percent}px`
  }
});

export type PipProps = PipParentProps & WithStyles<typeof dynamicStyles>;

const UnstyledPip: React.SFC<PipProps> = ({ classes, link }) => {
  const cx = classNames.bind(merge(classes, styles));
  return (
    <LinkContainer to={link} className={cx('pipContainer', 'scale')}>
      <HexagonComponent className={cx('pip')} />
    </LinkContainer>
  );
};

export const PipComponent = withStyles(dynamicStyles)(UnstyledPip);
