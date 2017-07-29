import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Gallery = ({
    // state
    index,
    percent,
    dragging,
    children,
    // action creators
    drag,
    startDrag,
    endDrag,
    setHandlerWidth,
}) => (
    <Measure
        bounds
        onResize={( contentRect ) => {
            setHandlerWidth( contentRect.bounds.width );
        }}
    >
        {({ measureRef }) => (
            <div
                className={cx( 'swipeHandler' )}
                ref={measureRef}
                onMouseDown={( e ) => {
                    startDrag( e.clientX );
                }}
                onTouchStart={( e ) => {
                    startDrag( e.changedTouches[0].clientX );
                }}
                onMouseUp={endDrag}
                onTouchEnd={endDrag}
                onTouchCancel={endDrag}
                onMouseLeave={( e ) => {
                    e.preventDefault();
                    endDrag();
                }}
                onMouseMove={( e ) => {
                    e.preventDefault();
                    drag( e.clientX );
                }}
                onTouchMove={( e ) => {
                    drag( e.changedTouches[0].clientX );
                }}
                role='presentation'
            >
                <div className={cx( 'col' )}>
                    <div className={cx( 'row' )}>
                        <canvas height='1890' width='1080' className={cx( 'fix' )} />
                        <Motion
                            style={{
                                i: dragging ?
                                    spring( index + percent, { stiffness: 1000, damping: 50 }) :
                                    spring( index, { stiffness: 50, damping: 9 }),
                            }}
                        >
                            {({ i }) =>
                                React.cloneElement( children, { percent: i })
                            }
                        </Motion>
                    </div>
                </div>
            </div>
        )}
    </Measure>
);

Gallery.propTypes = {
    children: PropTypes.node.isRequired,
    // state
    percent: PropTypes.number,
    index: PropTypes.number,
    dragging: PropTypes.bool,
    // action creators
    drag: PropTypes.func.isRequired,
    startDrag: PropTypes.func.isRequired,
    endDrag: PropTypes.func.isRequired,
    setHandlerWidth: PropTypes.func.isRequired,
};

Gallery.defaultProps = {
    dragging: false,
    percent: 0,
    index: 0,
    nextIndex: 0,
};

export default Gallery;
