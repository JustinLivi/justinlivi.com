import { galleryInitialState, GalleryState } from '../features/Gallery/galleryState';
import { pagesInitialState, PagesState } from '../features/Pages/pagesState';

export interface State {
  gallery: GalleryState;
  pages: PagesState;
}

export const initialState: State = {
  gallery: galleryInitialState,
  pages: pagesInitialState
};
