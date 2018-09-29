
const utils = require('./utils')
const config = require('./config')
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const srcPath = utils.resolve('src')

module.exports = {
    entry: {
        'main': utils.resolve('src/main.jsx')
    },
    output: {
        publicPath: '/',
        path: utils.resolve(config.buildDirectory),
        filename: utils.assetsPath('js/[name].[chunkhash:7].js')
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            '@': srcPath
        }
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            chunkFilename: utils.assetsPath("css/[name].[chunkhash:7].css")
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: process.env.NODE_ENV === 'production',
            inject: true
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 20,
                    enforce: true
                },
                commons: {
                    test: /[\\/]components[\\/]|[\\/]common[\\/]|[\\/]utils[\\/]|[\\/]store[\\/]|[\\/]api[\\/]|[\\/]assets[\\/]style[\\/]/,
                    name: 'common',
                    chunks: 'all',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                include: srcPath
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ],
                include: srcPath
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[hash:7].[ext]',
                          outputPath: utils.assetsPath('img')
                      }
                  },
                  {
                      loader: 'image-webpack-loader'
                  }
                ],
                include: srcPath
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: utils.assetsPath('fonts')
                    }
                },
                include: srcPath
            }
        ]
    }
}
