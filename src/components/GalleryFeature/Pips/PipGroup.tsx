import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './PipStyle.scss';

const cx = classNames.bind(styles);

const PipGroup = ({ percent, children }) => {
  const routeCount = React.Children.count(children);
  const adjusted = Math.round(percent);
  const mod = adjusted % routeCount;
  const index = mod < 0 ? mod + routeCount : mod;
  return (
    <div className={cx('pipGroup')}>
      {routeCount > 1
        ? React.Children.map(children, (child, i) =>
            React.cloneElement(child, {
              percent:
                i === index ? 1.2 * (1.4 - Math.abs(percent - adjusted)) : 1
            })
          )
        : React.cloneElement(children, { percent: Math.max(0.7, percent) })}
    </div>
  );
};

PipGroup.propTypes = {
  percent: PropTypes.number,
  children: PropTypes.node.isRequired
};

PipGroup.defaultProps = {
  percent: 0
};

export default PipGroup;
