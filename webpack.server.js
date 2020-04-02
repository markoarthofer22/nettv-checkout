const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = function(_env, argv) {
    const isProduction = argv.mode === 'production';

    return {
        entry: path.resolve(__dirname, 'server/server.js'),

        mode: argv.mode,
        target: 'node',
        externals: [webpackNodeExternals()],

        output: {
            path: path.join(__dirname),
            filename: 'build/index.js',
            publicPath: '/'
        },

        node: {
            __dirname: false
        },
        stats: 'minimal',
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                            plugins: ['@loadable/babel-plugin', '@babel/plugin-transform-runtime', '@babel/plugin-proposal-optional-chaining']
                        }
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ['ignore-loader']
                },
                {
                    test: /\.(ttf|eot|otf|svg|png)$/,
                    loader: 'ignore-loader'
                }
            ]
        },

        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1
            }),
            new webpack.DefinePlugin({
                __isBrowser__: 'false'
            })
        ],
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    parallel: true,
                    cache: true,
                    terserOptions: {
                        parse: {
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            toplevel: true,
                            dead_code: true,
                            drop_console: true,
                            comparisons: false,
                            warnings: false
                        },

                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                })
            ]
        }
    };
};
