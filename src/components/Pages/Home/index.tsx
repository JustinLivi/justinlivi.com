import classNames from 'classnames/bind';
import React from 'react';

import { Link } from '../../Gallery';
import { Triangle } from '../../Shapes/Triangle';
import styles from './style.scss';

const cx = classNames.bind(styles);

const Home = () => (
  <div className={cx('page')}>
    <h1>JUSTIN LIVI</h1>
    <ul className={cx('subheader')}>
      <li>
        <Link to='/experience/'>entrepreneur</Link>
      </li>
      <li>
        <Link to='/open-source/'>engineer</Link>
      </li>
      <li>
        <Link to='/branding/'>designer</Link>
      </li>
      <li>
        <Link to='/branding/'>artist</Link>
      </li>
    </ul>
    <div className={cx('swipe')}>
      <div className={cx('leftTriangle', 'triangle')}>
        <Triangle />
      </div>
      <div>swipe</div>
      <div className={cx('rightTriangle', 'triangle')}>
        <Triangle />
      </div>
    </div>
  </div>
);

export default Home;
