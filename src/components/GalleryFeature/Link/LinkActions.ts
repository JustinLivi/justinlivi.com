import { createActionCreator, FluxStandardAction } from 'redux-keyable';

export const GO_TO_ROUTE = 'GO_TO_ROUTE';

export interface Route {
  route: string;
}

export interface GoToRouteAction
  extends FluxStandardAction<typeof GO_TO_ROUTE> {
  payload: Route;
}

export const goToRoute = createActionCreator<Route, GoToRouteAction>(
  payload => ({
    payload,
    type: GO_TO_ROUTE
  })
);
