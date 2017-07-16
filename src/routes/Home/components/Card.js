import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import DuckImage from '../assets/Duck.jpg';
import styles from './Gallery.scss';

const cx = classNames.bind( styles );

export const Card = ({
    // state
    percent,
    cardWidth,
    // action creators
    setCardWidth,
}) => (
    <Measure
        bounds
        onResize={( contentRect ) => {
            setCardWidth( contentRect.bounds.width );
        }}
    >
        {({ measureRef }) => {
            const halfWidth = Math.floor( cardWidth / 2 ) - 1;
            const edgeWidth = Math.ceil( cardWidth / 50 );
            const halfEdge = Math.floor( edgeWidth / 2 );
            return (
                <div
                    className={cx( 'content' )}
                    ref={measureRef}
                >
                    <div
                        className={cx( 'cardface' )}
                        style={({ transform: `rotateY(${percent * 180}deg) translateZ(${halfEdge}px)` })}
                    >
                        <div className={cx( 'cardContent' )}>
                            <h4>Welcome!</h4>
                            <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
                        </div>
                    </div>
                    <div
                        className={cx( 'cardside' )}
                        style={({
                            transform: `rotateY(${90 + ( percent * 180 )}deg) translateZ(${halfWidth}px)`,
                            width: `${edgeWidth}px`,
                        })}
                    />
                    <div
                        className={cx( 'cardside' )}
                        style={({
                            transform: `rotateY(${-90 + ( percent * 180 )}deg) translateZ(${halfWidth}px)`,
                            width: `${edgeWidth}px`,
                        })}
                    />
                    <div
                        className={cx( 'cardface' )}
                        style={({ transform: `rotateY(${180 + ( percent * 180 )}deg) translateZ(${halfEdge}px)` })}
                    >
                        <div className={cx( 'cardContent' )}>
                            This is the back!
                        </div>
                    </div>
                    <div
                        className={cx( 'shadow' )}
                        style={({ transform: `rotateY(${percent * 180}deg) rotateX(90deg)` })}
                    />
                </div>
            );
        }}
    </Measure>
);

Card.propTypes = {
    // state
    percent: PropTypes.number,
    cardWidth: PropTypes.number,
    // action creators
    setCardWidth: PropTypes.func.isRequired,
};

Card.defaultProps = {
    percent: 0,
    cardWidth: 0,
};

export default Card;
