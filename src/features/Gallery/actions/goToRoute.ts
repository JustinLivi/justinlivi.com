import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const GO_TO_ROUTE = 'GO_TO_ROUTE';

export interface GoToRouteActionArgs {
  route: string;
}

export interface GoToRouteAction
  extends FluxStandardAction<typeof GO_TO_ROUTE> {
  payload: {
    route: string;
  };
}

export const goToRoute = createActionCreator<
  GoToRouteActionArgs,
  GoToRouteAction
>(payload => ({
  payload,
  type: GO_TO_ROUTE
}));
