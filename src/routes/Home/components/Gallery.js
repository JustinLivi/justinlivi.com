import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import DuckImage from '../assets/Duck.jpg';
import styles from './Gallery.scss';

const cx = classNames.bind( styles );

export const HomeView = ({ percent, drag, startDrag, endDrag }) => (
    <div
        role='presentation'
        className={cx( 'swipeHandler' )}
        onMouseDown={startDrag}
        onMouseUp={endDrag}
        onMouseLeave={( e ) => {
            e.preventDefault();
            endDrag();
        }}
        onMouseMove={( e ) => {
            e.preventDefault();
            drag( e.clientX );
        }}
    >
        <div
            className={cx( 'card' )}
            style={({
                transform: `rotateY(${percent}deg)`,
            })}
        >
            <h4>Welcome!</h4>
            <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
        </div>
    </div>
);

HomeView.propTypes = {
    percent: PropTypes.number,
    drag: PropTypes.func.isRequired,
    startDrag: PropTypes.func.isRequired,
    endDrag: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
    percent: 0,
};

export default HomeView;
