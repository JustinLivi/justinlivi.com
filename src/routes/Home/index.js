import { injectReducer } from '../../store/reducers';

export default store => ({
    /*  Async getComponent is only invoked when route matches   */
    getComponent( nextState, cb ) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], ( require ) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const Gallery = require( './containers/GalleryContainer' ).default;
            const galleryReducer = require( './modules/gallery' ).default;
            const cardReducer = require( './modules/gallery' ).default;

            /*  Add the reducer to the store on key 'counter'  */
            injectReducer( store, { key: 'gallery', reducer: galleryReducer });
            injectReducer( store, { key: 'card', reducer: cardReducer });

            /*  Return getComponent   */
            cb( null, Gallery );

            /* Webpack named bundle   */
        });
    },
});
