import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './PageLayout.module.scss';

const cx = classNames.bind(styles);

const PageLayout = ({ nav, main }) => (
  <div className={cx('container')}>
    {nav}
    <main>{main}</main>
  </div>
);

PageLayout.propTypes = {
  nav: PropTypes.node.isRequired,
  main: PropTypes.node.isRequired
};

export default PageLayout;
