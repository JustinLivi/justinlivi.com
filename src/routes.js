const express = require( 'express' );

const router = express.Router(); // eslint-disable-line new-cap

router.get( '/', ( req, res ) => {
    res.render( 'index' );
});

router.get( '/dancingsine', ( req, res ) => {
    res.redirect( '/#dancingsine/preview' );
});

exports = module.exports = router;
