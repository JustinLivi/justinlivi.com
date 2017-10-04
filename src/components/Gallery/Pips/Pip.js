import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import injectSheet from 'react-jss';
import merge from 'lodash.merge';
import styles from './PipStyle.scss';
import { Link } from '../index';

const dynamicStyles = {
    scale: {
        transform: ({ percent }) => `scale3d(${percent},${percent},1)`,
        strokeWidth: ({ percent }) => `${10 / percent}px`,
    },
};

const Pip = ({ classes, link }) => {
    const cx = classNames.bind( merge( classes, styles ));
    return (
        <Link
            to={link}
            className={cx( 'pipContainer' )}
        >
            <svg
                xmlns='http://www.w3.org/2000/svg'
                version='1.1'
                viewBox='0 0 50 40'
                className={cx( 'pip', 'scale' )}
            >
                <polygon points='45,20 35,37.33 15,37.33 5,20 15,2.66 35,2.66' />
            </svg>
        </Link>
    );
};

Pip.propTypes = {
    classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    link: PropTypes.string.isRequired,
};

export default injectSheet( dynamicStyles )( Pip );
