import { routerLocationChange } from 'App/state/actions';
import { breadcrumbsBlur, breadcrumbsSelect } from 'Header/state/headerActions';
import { on, reducer } from 'ts-action';

export const headerStateReducer = reducer(
  false,
  on(breadcrumbsBlur, routerLocationChange, () => false),
  on(breadcrumbsSelect, state => !state),
);
