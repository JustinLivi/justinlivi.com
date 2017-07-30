import { combineReducers } from 'redux';
import { GalleryReducers, CardDisplay } from '../components/Gallery';

const { CardReducers } = CardDisplay;

export const makeRootReducer = asyncReducers => combineReducers({
    gallery: GalleryReducers,
    card: CardReducers,
    ...asyncReducers,
});

export const injectReducer = ( store, { key, reducer }) => {
    if ( Object.hasOwnProperty.call( store.asyncReducers, key )) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer( makeRootReducer( store.asyncReducers ));
};

export default makeRootReducer;
