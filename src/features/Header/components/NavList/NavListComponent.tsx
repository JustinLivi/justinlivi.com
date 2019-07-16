import { makeStyles } from '@material-ui/styles';
import useBoundingClientRect from '@rooks/use-boundingclientrect';
import classNames from 'classnames/bind';
import { merge } from 'lodash';
import React, { useRef } from 'react';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NavElementComponent } from '../NavElement/NavElementComponent';
import styles from './NavListStyles.module.scss';

export interface NavListProps {
  fixed: boolean;
  expanded: boolean;
}

export interface NavListStyleProps {
  expandedHeight: number;
  scrollY: number;
  fixed: boolean;
  expanded: boolean;
}

const useStyles = makeStyles<unknown, NavListStyleProps>({
  dynamicHeight: ({ expandedHeight, expanded, fixed }) => ({
    height:
      fixed || expandedHeight === -1
        ? 'initial'
        : expanded
        ? `calc(${expandedHeight}px + 1rem)`
        : 0,
    visibility: fixed ? 'initial' : expandedHeight === -1 ? 'hidden' : 'initial'
  }),
  dynamicShadow: ({ fixed, expanded, scrollY }) => ({
    boxShadow: `0rem 0rem 0.5rem 0rem rgba(0, 0, 0, ${
      fixed
        ? 0
        : expanded
        ? 0.3
        : Math.min(Math.max(scrollY - 75, 0) / 100, 0.3)
    })`
  })
});

export const NavListComponent: React.SFC<NavListProps> = ({
  fixed,
  expanded
}) => {
  const ref = useRef(null);
  const boundingclientrect = useBoundingClientRect(ref as any);
  const expandedHeight = boundingclientrect ? boundingclientrect.height : -1;
  const { y: scrollY } = useScrollPosition();
  const dymanicStyles = useStyles({ expandedHeight, expanded, fixed, scrollY });
  const cx = classNames.bind(merge({}, styles, dymanicStyles));
  return (
    <nav className={cx('navList')}>
      <div className={cx('expandable', 'dynamicHeight')}>
        <ul ref={ref}>
          <NavElementComponent title='open source' target='/open-source' />
          <NavElementComponent
            title='generative art'
            target='/generative-art'
          />
          <NavElementComponent title='design' target='/design' />
          <NavElementComponent title='contact' target='/contact' />
        </ul>
      </div>
      <div className={cx('navFooter')}>
        <div className={cx('navShadow', 'dynamicShadow')} />
      </div>
    </nav>
  );
};
