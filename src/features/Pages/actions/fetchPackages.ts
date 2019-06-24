export const REQUEST_PACKAGES = 'REQUEST_PACKAGES';
export const RECEIVE_PACKAGES = 'RECEIVE_PACKAGES';

// export function requestPackages() {
//   return {
//     type: REQUEST_PACKAGES
//   };
// }

// export function receivePackages({ results: packages }) {
//   return {
//     type: RECEIVE_PACKAGES,
//     packages
//   };
// }

// export function fetchPackages() {
//   return dispatch => {
//     dispatch(requestPackages());
//     return fetch(
//       'https://api.npms.io/v2/search?q=maintainer:justinlivi&size=250&from=0'
//     )
//       .then(response => response.json())
//       .then(json => dispatch(receivePackages(json)));
//   };
// }

// export function fetchPackagesIfNeeded() {
//   return (dispatch, getState) => {
//     const { packages, isFetching } = getState().packages;
//     if (!packages.length && !isFetching) {
//       return dispatch(fetchPackages());
//     }
//     return undefined;
//   };
// }

// export const actions = {
//   requestPackages,
//   receivePackages,
//   fetchPackages,
//   fetchPackagesIfNeeded
// };
