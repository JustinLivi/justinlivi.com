import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import DuckImage from '../assets/Duck.jpg';
import styles from './Gallery.scss';

const cx = classNames.bind( styles );

export const HomeView = ({
    // state
    percent,
    // action creators
    drag,
    startDrag,
    endDrag,
    resize,
}) => (
    <Measure
        bounds
        onResize={( contentRect ) => {
            resize( contentRect.bounds );
        }}
    >
        {({ measureRef }) => (
            <div
                className={cx( 'swipeHandler' )}
                ref={measureRef}
                onMouseDown={( e ) => {
                    startDrag( e.clientX );
                }}
                onMouseUp={endDrag}
                onMouseLeave={( e ) => {
                    e.preventDefault();
                    endDrag();
                }}
                onMouseMove={( e ) => {
                    e.preventDefault();
                    drag( e.clientX );
                }}
                role='presentation'
            >
                <div className={cx( 'col' )}>
                    <div className={cx( 'row' )}>
                        <canvas height='1890' width='1080' className={cx( 'fix' )} />
                        <div className={cx( 'content' )}>
                            <div
                                className={cx( 'card' )}
                                style={({
                                    transform: `rotateY(${percent * 180}deg)`,
                                })}
                            >
                                <h4>Welcome!</h4>
                                <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Measure>
);

HomeView.propTypes = {
    // state
    percent: PropTypes.number,
    // action creators
    drag: PropTypes.func.isRequired,
    startDrag: PropTypes.func.isRequired,
    endDrag: PropTypes.func.isRequired,
    resize: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
    percent: 0,
};

export default HomeView;
