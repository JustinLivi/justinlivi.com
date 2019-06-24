import { getIndex } from '../Pages/routes';

export interface GalleryState {
  cardWidth: number;
  percent: number;
  startX: number;
  handlerWidth: number;
  dragging: boolean;
  index: number;
}

const index = getIndex(location.pathname);

export const galleryInitialState: GalleryState = {
  cardWidth: 0,
  percent: 0,
  startX: 0,
  handlerWidth: 0,
  dragging: false,
  index: index === -1 ? 0 : index
};

export const startThreshold = 0.15;
export const continueThreshold = 0.2;

export const normalizePercent = (percent: number) =>
  Math.abs(percent) < startThreshold
    ? 0
    : percent - (startThreshold * Math.sign(percent)) / (1 - startThreshold);
