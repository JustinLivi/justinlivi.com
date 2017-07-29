import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Card = ({
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
            const iterator = Math.sin(( 0.2 + percent ) * Math.PI );
            const grow = Math.tan(( 0.2 + percent ) * Math.PI );
            const growBounce = grow < 0 ? grow * -1 : grow;
            const bounce = iterator < 0 ? iterator * -1 : iterator;
            const height = Math.min( growBounce * edgeWidth * 2, 100 );
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
                        </div>
                        <div
                            className={cx( 'darken' )}
                            style={({
                                opacity: Math.sin(( 1.1 + percent ) * Math.PI ) * 0.6,
                            })}
                        />
                        <div
                            className={cx( 'highlight' )}
                            style={({
                                transform: `translateX(${(( halfWidth - ( Math.sin(( percent - 0.2 ) * Math.PI ) * cardWidth )))}px)`,
                                opacity: Math.sin( percent * Math.PI ) * 0.07,
                            })}
                        />
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
                        <div
                            className={cx( 'darken' )}
                            style={({
                                opacity: Math.sin(( 0.1 + percent ) * Math.PI ) * 0.6,
                            })}
                        />
                        <div
                            className={cx( 'highlight' )}
                            style={({
                                transform: `translateX(${(( Math.sin(( percent - 0.2 ) * Math.PI ) * cardWidth ) + halfWidth )}px)`,
                                opacity: -Math.sin( percent * Math.PI ) * 0.07,
                            })}
                        />
                    </div>
                    <div
                        className={cx( 'shadow' )}
                        style={({
                            height: `${edgeWidth}px`,
                            boxShadow: `0 0 ${halfEdge}px ${halfEdge * 0.8}px #000`,
                            transform: `rotateY(${percent * 180}deg) rotateX(90deg)`,
                            bottom: 70 - halfEdge,
                        })}
                    />
                    <div
                        className={cx( 'shadow' )}
                        style={({
                            height: `${height / 3}px`,
                            boxShadow: `0 ${-iterator * edgeWidth * 1.4}px ${bounce * edgeWidth * 2}px ${bounce * edgeWidth * 2}px #000`,
                            bottom: 70 - ( height / 6 ),
                            transform: `rotateY(${percent * 180}deg) rotateX(90deg)`,
                            opacity: ( 1.2 - bounce ) * 0.4,
                        })}
                    />
                    <div
                        className={cx( 'shadow' )}
                        style={({
                            height: `${height}px`,
                            boxShadow: `0 ${-iterator * edgeWidth}px ${height * 2}px ${height}px #000`,
                            bottom: 70 - ( height / 2 ),
                            transform: `rotateY(${percent * 180}deg) rotateX(90deg) translate(${-( height * 0.4 * iterator )}px, ${-( height * 0.7 * iterator )}px)`,
                            opacity: 1.1 - bounce,
                        })}
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
