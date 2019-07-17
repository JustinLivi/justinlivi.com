import { routerLocationChange } from 'features/App/actions/router';
import { collapseNav } from 'features/Header/actions/collapseNav';
import { expandNav } from 'features/Header/actions/expandNav';
import { on, reducer } from 'ts-action';

export const headerStateReducer = reducer(
  false,
  on(collapseNav, routerLocationChange, () => false),
  on(expandNav, () => true)
);
