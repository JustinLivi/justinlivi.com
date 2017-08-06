import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import { Redirect } from 'react-router';
import styles from './style.scss';

const cx = classNames.bind( styles );

const Gallery = ({
    children,
    routes,
    location,
    // state
    index,
    percent,
    dragging,
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
                            {({ i }) => (
                                <div>
                                    {(() => {
                                        const adjusted = Math.round( i );
                                        const route = routes[
                                            adjusted % routes.length < 0 ?
                                            ( adjusted % routes.length ) + routes.length :
                                            adjusted % routes.length
                                        ];
                                        return location.pathname.match( new RegExp( `^/${route}/` )) ?
                                            '' : ( <Redirect to={`/${route}/`} /> );
                                    })()}
                                    {
                                    React.Children.count( children ) > 1 ?
                                    ( <div>{
                                        React.Children.map( children, child =>
                                            React.cloneElement( child, { percent: i }))
                                        }</div> ) :
                                    React.cloneElement( children, { percent: i })
                                    }
                                </div>
                            )}
                        </Motion>
                    </div>
                </div>
            </div>
        )}
    </Measure>
);

Gallery.propTypes = {
    children: PropTypes.node.isRequired,
    routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    location: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
