/* eslint import/no-extraneous-dependencies: 0 */

const webpack = require( 'webpack' );
const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const BabiliPlugin = require( 'babili-webpack-plugin' );

const nodeModulesPath = path.resolve( __dirname, 'node_modules' );
const extractLESS = new ExtractTextPlugin( 'index.min.css' );

const config = {
    context: __dirname,
    entry: [ 'babel-polyfill', './src/bundle.js' ],
    output: {
        path: 'public',
        filename: 'index.min.js',
        publicPath: path.resolve( __dirname, 'src/public/' ),
    },
    module: {
        loaders: [
            { test: /\.(css|less)$/, loader: extractLESS.extract( 'style', 'css!less?-discardDuplicates' ) },
        ],
    },
    plugins: [
        extractLESS,
        new CopyWebpackPlugin([{
            from: 'justinlivi-dancing-sine/src/statement/',
            to: 'statements',
            context: nodeModulesPath,
        }, {
            from: 'justinlivi-community/src/statement/',
            to: 'statements',
            context: nodeModulesPath,
        }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            backbone: 'backbone',
            underscore: 'lodash',
        }),
    ],
    resolve: {
        fallback: path.resolve( __dirname, 'node_modules' ),
        alias: {
            underscore: 'lodash',
        },
    },
};

if ( process.env.NODE_ENV === 'production') {
    config.plugins = config.plugins.concat([
        new BabiliPlugin({
            comments: false,
            sourceMap: undefined,
        }),
        new webpack.optimize.UglifyJsPlugin({
            exclude: /.js$/,
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
    ]);
}
else {
    config.module.loaders.push({ test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath] });
}

module.exports = config;
