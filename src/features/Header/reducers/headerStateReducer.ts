import { routerLocationChange } from 'features/App/state/actions';
import { breadcrumbsBlur } from 'features/Header/actions/breadcrumbsBlur';
import { breadcrumbsSelect } from 'features/Header/actions/breadcrumbsSelect';
import { on, reducer } from 'ts-action';

export const headerStateReducer = reducer(
  false,
  on(breadcrumbsBlur, routerLocationChange, () => false),
  on(breadcrumbsSelect, state => !state),
);
