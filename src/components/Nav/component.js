import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Nav = ({ setIndex }) => (
    <nav>
        <NavLink
            to='/home/'
            onClick={() => {
                setIndex( 0 );
            }}
            className={cx( 'navItem', 'left' )}
        >
            JUSTIN LIVI
        </NavLink>
        <NavLink to='/contact/' className={cx( 'navItem', 'right' )}>CONTACT</NavLink>
    </nav>
);

Nav.propTypes = {
    // action creators
    setIndex: PropTypes.func.isRequired,
};

export default Nav;
