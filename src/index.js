const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const http = require( 'http' );
const path = require( 'path' );
const helmet = require( 'helmet' );
const logger = require( 'brinkbit-logger' )({ __filename });
const compression = require( 'compression' );
const methodOverride = require( 'method-override' );
global.Promise = require( 'bluebird' );

const routes = require( './routes' );

// create express app
const app = express();

function configureMiddleware( config ) {
    // keep reference to config
    app.config = config;

    // settings
    app.disable( 'x-powered-by' );
    app.set( 'port', config.port );
    app.set( 'views', path.join( __dirname, 'templates' ));
    app.set( 'view engine', 'pug' );

    // middleware
    app.use( logger.middleware );
    app.use( compression());
    app.use( express.static( path.join( __dirname, '../public' )));
    app.use( methodOverride());
    app.use( bodyParser.json());
    app.use( bodyParser.urlencoded({ extended: true }));
    helmet( app );

    // global locals
    app.locals.projectName = app.config.projectName;
    app.locals.copyrightYear = new Date().getFullYear();
    app.locals.copyrightName = app.config.companyName;
    app.locals.cacheBreaker = 'br34k-01';

    // setup routes
    app.use( routes );

    // custom (friendly) error handler
    app.use(( err, req, res, next ) => {
        logger.error( err.message, err );
        next( err );
    });
}

function startServer( config ) {
    // settings
    app.disable( 'x-powered-by' );
    app.set( 'port', config.port );
    logger.debug( 'starting server', config );
    return new Promise(( resolve ) => {
        const server = app.listen( config.port, resolve );
        server.on( 'error', ( err ) => {
            logger.crit( 'server error', err );
        });
        process.on( 'uncaughtException', ( err ) => {
            logger.crit( 'uncaught exception', err );
        });
    });
}

app.start = function start( config ) {
    // setup the web server
    app.server = http.createServer( app );
    configureMiddleware( config );
    return startServer( config );
};

module.exports = app;
