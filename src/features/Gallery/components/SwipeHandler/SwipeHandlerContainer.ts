import { connect } from 'react-redux';

import { State } from '../../../../store/stateDefinition';
import { endDrag } from '../../actions/endDrag';
import { moveDrag } from '../../actions/moveDrag';
import { setHandlerWidth } from '../../actions/setHandlerWidth';
import { startDrag } from '../../actions/startDrag';
import { SwipeHandlerComponent } from './SwipeHandlerComponent';

export interface SwipeHandlerProps {
  routes: string[];
}

export const mapStateToProps = (
  { gallery: { dragging, index, percent } }: State,
  { routes }: SwipeHandlerProps
) => ({
  routes,
  dragging,
  index,
  percent
});

export const SwipeHandlerContainer = connect(
  mapStateToProps,
  {
    moveDrag,
    startDrag,
    endDrag,
    setHandlerWidth
  }
)(SwipeHandlerComponent);
