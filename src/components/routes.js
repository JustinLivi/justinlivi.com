import findIndex from 'lodash.findindex';

export const routes = [
    'home',
    'experience',
    'open-source',
    'branding',
    'contact',
];

export const getIndex = route => findIndex( routes, r => route.match( new RegExp( `^/${r}/` )));

export default routes;
