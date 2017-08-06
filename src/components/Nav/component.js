import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Nav = ({ setIndex }) => (
    <nav>
        <button
            tabIndex={0}
            role='link'
            to='/home/'
            onClick={( e ) => {
                e.currentTarget.blur();
                setIndex( 0 );
            }}
            className={cx( 'navItem', 'left' )}
        >
            JUSTIN LIVI
        </button>
        <button to='/contact/' className={cx( 'navItem', 'right' )}>CONTACT</button>
    </nav>
);

Nav.propTypes = {
    // action creators
    setIndex: PropTypes.func.isRequired,
};

export default Nav;
