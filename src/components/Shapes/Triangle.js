import React from 'react';
import PropTypes from 'prop-types';

const Triangle = ({ className }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        viewBox='0 0 53.3 60'
        className={className}
    >
        <polygon points='5,5 5,55 48.3,30.0' />
    </svg>
);

Triangle.propTypes = {
    className: PropTypes.string,
};

Triangle.defaultProps = {
    className: '',
};

export default Triangle;
