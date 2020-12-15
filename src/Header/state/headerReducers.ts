import { routerLocationChange } from 'App/state/actions';
import { breadcrumbsBlur, breadcrumbsSelect, menuItemBlur, menuItemFocus } from 'Header/state/headerActions';
import { on, reducer } from 'ts-action';

export const headerStateReducer = reducer(
  false,
  on(breadcrumbsBlur, menuItemBlur, routerLocationChange, () => false),
  on(breadcrumbsSelect, state => !state),
  on(menuItemFocus, () => true),
);
