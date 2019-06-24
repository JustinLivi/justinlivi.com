import { findIndex } from 'lodash';

export const routes = [
  'home',
  'experience',
  'open-source',
  'branding',
  'contact'
];

export const getIndex = (route: string) =>
  findIndex(routes, r => !!route.match(new RegExp(`^/${r}/`)));
