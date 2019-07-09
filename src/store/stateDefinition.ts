import { pagesInitialState, PagesState } from '../features/Pages/pagesState';

export interface State {
  pages: PagesState;
}

export const initialState: State = {
  pages: pagesInitialState
};
