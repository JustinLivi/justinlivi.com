export interface Package {
  name: string;
  links: { npm: string; repository: string };
}

export interface PagesState {
  packages: Package[];
  isFetching: boolean;
}

export const pagesInitialState: PagesState = {
  packages: [],
  isFetching: false
};
