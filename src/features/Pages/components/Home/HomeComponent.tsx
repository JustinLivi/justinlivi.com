import classNames from 'classnames/bind';
import React from 'react';

import { TriangleComponent } from '../../../App/components/Triangle/TriangleComponent';
import { LinkContainer } from '../../../Gallery/components/Link/LinkContainer';
import styles from './HomeStyles.scss';

const cx = classNames.bind(styles);

export const HomeComponent = () => (
  <div className={cx('page')}>
    <h1>JUSTIN LIVI</h1>
    <ul className={cx('subheader')}>
      <li>
        <LinkContainer to='/experience/'>entrepreneur</LinkContainer>
      </li>
      <li>
        <LinkContainer to='/open-source/'>engineer</LinkContainer>
      </li>
      <li>
        <LinkContainer to='/branding/'>designer</LinkContainer>
      </li>
      <li>
        <LinkContainer to='/branding/'>artist</LinkContainer>
      </li>
    </ul>
    <div className={cx('swipe')}>
      <div className={cx('leftTriangle', 'triangle')}>
        <TriangleComponent />
      </div>
      <div>swipe</div>
      <div className={cx('rightTriangle', 'triangle')}>
        <TriangleComponent />
      </div>
    </div>
  </div>
);
