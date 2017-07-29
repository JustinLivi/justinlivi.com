import { combineReducers } from 'redux';
import locationReducer from './location';
import { GalleryReducers, CardDisplay } from '../components/Gallery';

const { CardReducers } = CardDisplay;

export const makeRootReducer = asyncReducers => combineReducers({
    location: locationReducer,
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
