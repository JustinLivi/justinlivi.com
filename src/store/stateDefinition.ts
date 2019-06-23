import { CardState } from '../components/Gallery/Card/CardReducers';

export interface GalleryState {}

export interface PackagesState {}

export interface State {
  card: CardState;
  gallery: GalleryState;
  packages: PackagesState;
}
