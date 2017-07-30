import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageLayout.scss';

const cx = classNames.bind( styles );

const PageLayout = ({ children }) => (
    <div className={cx( 'container' )}>
        <nav>
            <div className={cx( 'navItem', 'left' )}>JUSTIN LIVI</div>
            <div className={cx( 'navItem', 'right' )}>CONTACT</div>
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
