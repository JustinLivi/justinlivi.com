import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames/bind';
import { merge } from 'lodash';
import React, { useCallback } from 'react';
import Measure, { ContentRect } from 'react-measure';

import { setCardWidth } from '../../actions/setCardWidth';
import styles from './CardStyles.module.scss';

export interface CardProps {
  percent: number;
  halfEdge: number;
  cardWidth: number;
  halfWidth: number;
  edgeWidth: number;
  height: number;
  iterator: number;
  bounce: number;
  setCardWidth: typeof setCardWidth;
}

const useStyles = makeStyles<unknown, CardProps>(
  {
    cardfront: ({ percent, halfEdge }) => ({
      transform: `rotateY(${percent * 180}deg) translateZ(${halfEdge}px)`
    }),
    cardback: ({ percent = 0, halfEdge }: CardProps) => ({
      transform: `rotateY(${180 + percent * 180}deg) translateZ(${halfEdge}px)`
    }),
    fadeDarkFront: ({ percent }: CardProps) => ({
      opacity: Math.sin((1.1 + percent) * Math.PI) * 0.6
    }),
    fadeDarkBack: ({ percent }: CardProps) => ({
      opacity: Math.sin((0.1 + percent) * Math.PI) * 0.6
    }),
    fadeLightFront: ({ percent, cardWidth, halfWidth }: CardProps) => ({
      transform: `translateX(${halfWidth -
        1 -
        Math.sin((percent - 0.2) * Math.PI) * cardWidth}px)`,
      opacity: Math.sin(percent * Math.PI) * 0.07
    }),
    fadeLightBack: ({ percent, cardWidth, halfWidth }: CardProps) => ({
      transform: `translateX(${Math.sin((percent - 0.2) * Math.PI) * cardWidth +
        (halfWidth - 1)}px)`,
      opacity: -Math.sin(percent * Math.PI) * 0.07
    }),
    edge: ({ edgeWidth }: CardProps) => ({
      width: `${edgeWidth}px`
    }),
    leftSide: ({ percent, halfWidth }: CardProps) => ({
      transform: `rotateY(${90 + percent * 180}deg) translateZ(${halfWidth}px)`
    }),
    rightSide: ({ percent, halfWidth }: CardProps) => ({
      transform: `rotateY(${-90 + percent * 180}deg) translateZ(${halfWidth}px)`
    }),
    edgeShadow: ({ edgeWidth, halfEdge, percent }: CardProps) => ({
      height: `${edgeWidth}px`,
      boxShadow: `0 0 ${halfEdge}px ${halfEdge * 0.8}px #000`,
      transform: `rotateY(${percent * 180}deg) rotateX(90deg)`,
      bottom: -halfEdge
    }),
    bigShadow: ({
      height,
      iterator,
      edgeWidth,
      bounce,
      percent
    }: CardProps) => ({
      height: `${height / 3}px`,
      boxShadow: `0 ${-iterator * edgeWidth * 1.4}px ${bounce *
        edgeWidth *
        2}px ${bounce * edgeWidth * 2}px #000`,
      bottom: -(height / 6),
      transform: `rotateY(${percent * 180}deg) rotateX(90deg)`,
      opacity: (1.2 - bounce) * 0.4
    }),
    mediumShadow: ({
      height,
      iterator,
      edgeWidth,
      percent,
      bounce
    }: CardProps) => ({
      height: `${height}px`,
      boxShadow: `0 ${-iterator * edgeWidth}px ${height *
        2}px ${height}px #000`,
      bottom: -(height / 2),
      transform: `rotateY(${percent * 180}deg) rotateX(90deg) translate(${-(
        height *
        0.4 *
        iterator
      )}px, ${-(height * 0.7 * iterator)}px)`,
      opacity: 1.1 - bounce
    })
  },
  { link: true }
);

export const CardComponent: React.SFC<CardProps> = props => {
  // const cx = classNames.bind(merge(classes, styles));
  const { children, percent, setCardWidth } = props;
  const classes = useStyles(props);
  const cx = classNames.bind(merge({}, styles, classes));
  return (
    <div className={cx('col')}>
      <div className={cx('row')}>
        <canvas height='1550' width='1000' className={cx('fix')} />
        <Measure
          bounds
          onResize={(contentRect: ContentRect) => {
            if (contentRect.bounds) {
              setCardWidth({ cardWidth: contentRect.bounds.width });
            }
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
