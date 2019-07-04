import classNames from 'classnames/bind';
import React from 'react';
import Measure from 'react-measure';
import { Motion, spring } from 'react-motion';
import { Redirect, Route, Switch } from 'react-router-dom';

import { PageRouterComponent } from '../../../Pages/components/PageRouter/PageRouterComponent';
import { endDrag } from '../../actions/endDrag';
import { moveDrag } from '../../actions/moveDrag';
import { setHandlerWidth } from '../../actions/setHandlerWidth';
import { startDrag } from '../../actions/startDrag';
import { CardContainer } from '../Card/CardContainer';
import { PipGroupComponent } from '../PipGroup/PipGroupComponent';
import styles from './SwipeHandlerStyle.module.scss';

const cx = classNames.bind(styles);

export interface SwipeHandlerProps {
  routes: string[];
  location: any;
  // state
  percent: number;
  index: number;
  dragging: boolean;
  // action creators
  moveDrag: typeof moveDrag;
  startDrag: typeof startDrag;
  endDrag: typeof endDrag;
  setHandlerWidth: typeof setHandlerWidth;
}

export const SwipeHandlerComponent: React.SFC<SwipeHandlerProps> = ({
  children,
  routes,
  location,
  // state
  index = 0,
  percent = 0,
  dragging = false,
  // action creators
  moveDrag,
  startDrag,
  endDrag,
  setHandlerWidth
}) => (
  <Measure
    bounds
    onResize={contentRect => {
      if (contentRect.bounds) {
        setHandlerWidth({ handlerWidth: contentRect.bounds.width });
      }
    }}
  >
    {({ measureRef }) => (
      <div
        className={cx('swipeHandler')}
        ref={measureRef}
        onMouseDown={e => {
          if (!dragging) {
            startDrag({ startX: e.clientX });
          }
        }}
        onTouchStart={e => {
          if (!dragging) {
            startDrag({ startX: e.changedTouches[0].clientX });
          }
        }}
        onMouseUp={() => {
          if (dragging) {
            endDrag(undefined);
          }
        }}
        onTouchEnd={() => {
          if (dragging) {
            endDrag(undefined);
          }
        }}
        onTouchCancel={() => {
          if (dragging) {
            endDrag(undefined);
          }
        }}
        onMouseLeave={e => {
          e.preventDefault();
          if (dragging) {
            endDrag(undefined);
          }
        }}
        onMouseMove={e => {
          e.preventDefault();
          if (dragging) {
            moveDrag({ clientX: e.clientX });
          }
        }}
        onTouchMove={e => {
          if (dragging) {
            moveDrag({ clientX: e.changedTouches[0].clientX });
          }
        }}
        role='presentation'
      >
        <Motion
          style={{
            i: dragging
              ? spring(index + percent, { stiffness: 1000, damping: 50 })
              : spring(index, { stiffness: 50, damping: 9 })
          }}
        >
          {({ i }) => (
            <div className={cx('fullHeight')}>
              {(() => {
                const adjusted = Math.round(i);
                const route =
                  routes[
                    adjusted % routes.length < 0
                      ? (adjusted % routes.length) + routes.length
                      : adjusted % routes.length
                  ];
                return location.pathname.match(new RegExp(`^/${route}/`)) ? (
                  ''
                ) : (
                  <Redirect to={`/${route}/`} />
                );
              })()}
              <CardContainer percent={i}>
                <Switch>
                  {routes.map(route => (
                    <Route
                      key={route}
                      path={`/${route}/`}
                      render={() => <PageRouterComponent route={route} />}
                    />
                  ))}
                </Switch>
              </CardContainer>
              <PipGroupComponent routes={routes} percent={percent} />
            </div>
          )}
        </Motion>
      </div>
    )}
  </Measure>
);
