import React from 'react';
import classNames from 'classnames/bind';
import styles from '../style.scss';

const cx = classNames.bind( styles );

const Home = () => (
    <div className={cx( 'page' )} >
        <h1>JUSTIN LIVI</h1>
        <ul>
            <li>entreprenuer</li>
            <li>engineer</li>
            <li>designer</li>
            <li>artist</li>
        </ul>
    </div>
);

export default Home;
