import React from 'react';
import { IndexLink, Link } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageLayout.scss';

const cx = classNames.bind( styles );

export const PageLayout = ({ children }) => (
    <div className={cx( 'container' )}>
        <nav>
            <IndexLink to='/' className={cx( 'navItem', 'left' )}>JUSTIN LIVI</IndexLink>
            <Link to='/contact' className={cx( 'navItem', 'right' )}>CONTACT</Link>
        </nav>
        <main>
            <div className={cx( 'col' )}>
                <div className={cx( 'row' )}>
                    <canvas height='1890' width='1080' className={cx( 'fix' )} />
                    <div className={cx( 'content' )}>
                        {children}
                    </div>
                </div>
            </div>
        </main>
        <footer className={cx( 'pips' )}>
            * * * * * *
        </footer>
    </div>
);

PageLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PageLayout;
