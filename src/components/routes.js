import findIndex from 'lodash.findindex';

export const routes = [
    'home',
    'route2',
    'route3',
    'contact',
];

export const getIndex = route => findIndex( routes, r => route.match( new RegExp( `^/${r}/` )));

export default routes;
