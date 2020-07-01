const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
//const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = function (_env, argv) {
    const isProduction = argv.mode === "production";
    const isDevelopment = !isProduction;

    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: isProduction ? "static/js/[name].[hash].js" : "static/js/[name].js",
            publicPath: isProduction ? "/shop/" : "/"
        },
        devServer: {
            contentBase: path.join(__dirname, "public"),
            compress: true,
            historyApiFallback: true,
            open: true,
            overlay: false,
            port: 3000,
            hot: true
        },
        devtool: isDevelopment && "cheap-module-source-map",
        stats: "minimal",
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                            plugins: ["@loadable/babel-plugin", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-transform-runtime", "@babel/plugin-proposal-optional-chaining"]
                        }
                    }
                },
                {
                    test: /\.css$|.scss$/,
                    use: [isProduction ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader", "sass-loader"]
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "assets"
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.LoaderOptionsPlugin({
                options: {
                    postcss: [autoprefixer()]
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ErrorOverlayPlugin(),
            new LoadablePlugin(),
            new CopyPlugin([
                {
                    from: path.resolve(__dirname, "public/assets"),
                    to: path.resolve(__dirname, "build/assets")
                }
            ]),
            isProduction && new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: isProduction ? "static/css/styles.[hash].css" : "static/css/styles.css"
            }),

            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                filename: "index.html",
                inject: true,
                chunks: false
            }),
            //  new BundleAnalyzerPlugin(),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new webpack.DefinePlugin({
                __isBrowser__: "true"
            })
        ].filter(Boolean),

        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    parallel: true,
                    cache: true,
                    terserOptions: {
                        parse: {
                            // We want terser to parse ecma 8 code. However, we don't want it
                            // to apply any minification steps that turns valid ecma 5 code
                            // into invalid ecma 5 code. This is why the 'compress' and 'output'
                            // sections only apply transformations that are ecma 5 safe
                            // https://github.com/facebook/create-react-app/pull/4234
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
                        mangle: {
                            safari10: true
                        },
                        keep_classnames: isProduction,
                        keep_fnames: isProduction,
                        output: {
                            ecma: 5,
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                new OptimizeCSSAssetsPlugin()
            ],
            moduleIds: "hashed",
            runtimeChunk: "single",
            splitChunks: {
                chunks: "all",
                cacheGroups: {
                    vendor: {
                        test: "/[\\/]node_modules[\\/]/",
                        name: "vendors",
                        chunks: "all"
                    },

                    styles: {
                        name: "styles",
                        test: /\.s?css$/,
                        chunks: "all",
                        minChunks: 1,
                        reuseExistingChunk: true,
                        enforce: true
                    }
                }
            }
        }
    };
};
