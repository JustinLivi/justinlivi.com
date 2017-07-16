import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Measure from 'react-measure';
import styles from './Gallery.scss';
import Card from '../containers/CardContainer';

const cx = classNames.bind( styles );

export const HomeView = ({
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
                        <Card />
                    </div>
                </div>
            </div>
        )}
    </Measure>
);

HomeView.propTypes = {
    drag: PropTypes.func.isRequired,
    startDrag: PropTypes.func.isRequired,
    endDrag: PropTypes.func.isRequired,
    setHandlerWidth: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
    percent: 0,
    cardWidth: 0,
};

export default HomeView;
