import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.scss';
import Triangle from '../../Shapes/Triangle';
import { Link } from '../../Gallery';

const cx = classNames.bind( styles );

const Home = () => (
    <div className={cx( 'page' )} >
        <h1>JUSTIN LIVI</h1>
        <ul className={cx( 'subheader' )}>
            <li><Link to='/experience/' >entrepreneur</Link></li>
            <li><Link to='/experience/' >engineer</Link></li>
            <li><Link to='/experience/' >designer</Link></li>
            <li><Link to='/experience/' >artist</Link></li>
        </ul>
        <div className={cx( 'swipe' )}>
            <div className={cx( 'leftTriangle', 'triangle' )}><Triangle /></div>
            <div>swipe</div>
            <div className={cx( 'rightTriangle', 'triangle' )}><Triangle /></div>
        </div>
    </div>
);

export default Home;
