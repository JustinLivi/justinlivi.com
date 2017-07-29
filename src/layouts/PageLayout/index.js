import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageLayout.scss';

const cx = classNames.bind( styles );

const PageLayout = ({ children }) => (
    <div className={cx( 'container' )}>
        <nav>
            <IndexLink to='/' className={cx( 'navItem', 'left' )}>JUSTIN LIVI</IndexLink>
            <Link to='/contact' className={cx( 'navItem', 'right' )}>CONTACT</Link>
        </nav>
        <main>
            {children}
        </main>
    </div>
);

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;
