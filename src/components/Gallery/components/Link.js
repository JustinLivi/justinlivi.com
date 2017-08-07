import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({
    children,
    to,
    role,
    tabIndex,
    className,
    goToRoute,
}) => (
    <button
        tabIndex={tabIndex}
        role={role}
        onClick={( e ) => {
            e.currentTarget.blur();
            goToRoute( to );
        }}
        className={className}
    >
        {children}
    </button>
);

Nav.propTypes = {
    tabIndex: PropTypes.number,
    to: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    role: PropTypes.string,
    // action creators
    goToRoute: PropTypes.func.isRequired,
};

Nav.defaultProps = {
    tabIndex: 0,
    role: 'link',
    children: '',
    className: '',
};

export default Nav;
