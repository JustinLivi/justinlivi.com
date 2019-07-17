import { pagesInitialState, PagesState } from 'features/Pages/pagesState';

export interface State {
  pages: PagesState;
  headerExpanded: boolean;
}

export const initialState: State = {
  pages: pagesInitialState,
  headerExpanded: true
};
