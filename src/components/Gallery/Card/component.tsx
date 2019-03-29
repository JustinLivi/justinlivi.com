import classNames from 'classnames/bind';
import { merge } from 'lodash';
import React from 'react';
import injectSheet from 'react-jss';
import Measure from 'react-measure';

import styles from './style.scss';

const dynamicStyles = {
  cardfront: {
    transform: ({ percent, halfEdge }) =>
      `rotateY(${percent * 180}deg) translateZ(${halfEdge}px)`
  },
  cardback: {
    transform: ({ percent, halfEdge }) =>
      `rotateY(${180 + percent * 180}deg) translateZ(${halfEdge}px)`
  },
  fadeDarkFront: {
    opacity: ({ percent }) => Math.sin((1.1 + percent) * Math.PI) * 0.6
  },
  fadeDarkBack: {
    opacity: ({ percent }) => Math.sin((0.1 + percent) * Math.PI) * 0.6
  },
  fadeLightFront: {
    transform: ({ percent, cardWidth, halfWidth }) =>
      `translateX(${halfWidth -
        1 -
        Math.sin((percent - 0.2) * Math.PI) * cardWidth}px)`,
    opacity: ({ percent }) => Math.sin(percent * Math.PI) * 0.07
  },
  fadeLightBack: {
    transform: ({ percent, cardWidth, halfWidth }) =>
      `translateX(${Math.sin((percent - 0.2) * Math.PI) * cardWidth +
        (halfWidth - 1)}px)`,
    opacity: ({ percent }) => -Math.sin(percent * Math.PI) * 0.07
  },
  edge: {
    width: ({ edgeWidth }) => `${edgeWidth}px`
  },
  leftSide: {
    transform: ({ percent, halfWidth }) =>
      `rotateY(${90 + percent * 180}deg) translateZ(${halfWidth}px)`
  },
  rightSide: {
    transform: ({ percent, halfWidth }) =>
      `rotateY(${-90 + percent * 180}deg) translateZ(${halfWidth}px)`
  },
  edgeShadow: {
    height: ({ edgeWidth }) => `${edgeWidth}px`,
    boxShadow: ({ halfEdge }) => `0 0 ${halfEdge}px ${halfEdge * 0.8}px #000`,
    transform: ({ percent }) => `rotateY(${percent * 180}deg) rotateX(90deg)`,
    bottom: ({ halfEdge }) => -halfEdge
  },
  bigShadow: {
    height: ({ height }) => `${height / 3}px`,
    boxShadow: ({ iterator, edgeWidth, bounce }) =>
      `0 ${-iterator * edgeWidth * 1.4}px ${bounce * edgeWidth * 2}px ${bounce *
        edgeWidth *
        2}px #000`,
    bottom: ({ height }) => -(height / 6),
    transform: ({ percent }) => `rotateY(${percent * 180}deg) rotateX(90deg)`,
    opacity: ({ bounce }) => (1.2 - bounce) * 0.4
  },
  mediumShadow: {
    height: ({ height }) => `${height}px`,
    boxShadow: ({ iterator, edgeWidth, height }) =>
      `0 ${-iterator * edgeWidth}px ${height * 2}px ${height}px #000`,
    bottom: ({ height }) => -(height / 2),
    transform: ({ percent, height, iterator }) =>
      `rotateY(${percent * 180}deg) rotateX(90deg) translate(${-(
        height *
        0.4 *
        iterator
      )}px, ${-(height * 0.7 * iterator)}px)`,
    opacity: ({ bounce }) => 1.1 - bounce
  }
};

export interface CardProps {
  classes: {};
  percent: number;
  setCardWidth: (width: number) => void;
}

const UnstyledCard: React.SFC<CardProps> = ({
  classes,
  children,
  percent,
  setCardWidth
}) => {
  const cx = classNames.bind(merge(classes, styles));
  return (
    <div className={cx('col')}>
      <div className={cx('row')}>
        <canvas height='1550' width='1000' className={cx('fix')} />
        <Measure
          bounds
          onResize={contentRect => {
            setCardWidth(contentRect.bounds.width);
          }}
        >
          {({ measureRef }) => (
            <div className={cx('content')} ref={measureRef}>
              <div className={cx('cardface', 'cardfront')}>
                <div
                  className={cx('cardContent', {
                    touchable: !(Math.floor(percent) % 2)
                  })}
                >
                  {children}
                </div>
                <div className={cx('darken', 'fadeDarkFront')} />
                <div className={cx('highlight', 'fadeLightFront')} />
              </div>
              <div className={cx('cardside', 'leftSide', 'edge')} />
              <div className={cx('cardside', 'rightSide', 'edge')} />
              <div className={cx('cardface', 'cardback')}>
                <div
                  className={cx('cardContent', {
                    touchable: Math.floor(percent) % 2
                  })}
                >
                  {children}
                </div>
                <div className={cx('darken', 'fadeDarkBack')} />
                <div className={cx('highlight', 'fadeLightBack')} />
              </div>
              <div className={cx('shadow', 'edgeShadow')} />
              <div className={cx('shadow', 'bigShadow')} />
              <div className={cx('shadow', 'mediumShadow')} />
            </div>
          )}
        </Measure>
      </div>
    </div>
  );
};

export const UnconnectedCard = injectSheet(dynamicStyles)(UnstyledCard);
