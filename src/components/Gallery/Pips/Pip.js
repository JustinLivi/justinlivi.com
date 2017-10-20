import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import injectSheet from 'react-jss';
import merge from 'lodash.merge';
import styles from './PipStyle.scss';
import { Link } from '../index';
import Hexagon from '../../Shapes/Hexagon';

const dynamicStyles = {
    scale: {
        transform: ({ percent }) => `scale3d(${percent},${percent},1)`,
        strokeWidth: ({ percent }) => `${9 / percent}px`,
    },
};

const Pip = ({ classes, link }) => {
    const cx = classNames.bind( merge( classes, styles ));
    return (
        <Link
            to={link}
            className={cx( 'pipContainer', 'scale' )}
        >
            <Hexagon className={cx( 'pip' )} />
        </Link>
    );
};

Pip.propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    link: PropTypes.string.isRequired,
};

export default injectSheet( dynamicStyles )( Pip );
