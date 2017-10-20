import React from 'react';
import classNames from 'classnames/bind';
import { Link } from '../Gallery';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Nav = () => (
    <nav>
        <Link
            to='/home/'
            className={cx( 'navItem', 'left' )}
        >
            JUSTIN LIVI
        </Link>
        <Link
            to='/contact/'
            className={cx( 'navItem', 'right' )}
        >
            CONTACT
        </Link>
    </nav>
);

export default Nav;
