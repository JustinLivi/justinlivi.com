import { connect } from 'react-redux';

import { State } from '../../../store/stateDefinition';
import { setCardWidth } from './CardActions';
import { UnconnectedCard } from './CardComponent';

export interface CardProps {
  percent: number;
}

export const mapStateToProps = (
  { card: { cardWidth } }: State,
  { percent }: CardProps
) => {
  const inversePercent = percent * -1;
  const halfWidth = Math.floor(cardWidth / 2);
  const edgeWidth = Math.ceil(cardWidth / 50);
  const halfEdge = Math.floor(edgeWidth / 2);
  const iterator = Math.sin((0.2 + inversePercent) * Math.PI);
  const grow = Math.tan((0.2 + inversePercent) * Math.PI);
  const growBounce = grow < 0 ? grow * -1 : grow;
  const bounce = iterator < 0 ? iterator * -1 : iterator;
  const height = Math.min(growBounce * edgeWidth * 2, 100);
  return {
    cardWidth,
    halfWidth,
    halfEdge,
    edgeWidth,
    iterator,
    bounce,
    height,
    percent: inversePercent
  };
};

export const Card = connect(
  mapStateToProps,
  {
    setCardWidth
  }
)(UnconnectedCard);
