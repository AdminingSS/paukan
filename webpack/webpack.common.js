'use strict';

const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dest = Path.join(__dirname, '../dist');

module.exports = {
    entry: {
        app: Path.resolve(__dirname, '../src/scripts/index'),
        vendors: Path.resolve(__dirname, '../src/scripts/vendors/index'),
    },
    output: {
        path: dest,
        filename: 'scripts/[name].[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin(
            [dest],
            { root: Path.join(__dirname, '../') }),
        new CopyWebpackPlugin([
            {from: Path.resolve(__dirname, '../public'), to: './'},
            {from: Path.resolve(__dirname, '../src/images'), to: './images'},
        ]),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index.html'),
            filename: "index.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/index-2.html'),
            filename: "index-2.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/search.html'),
            filename: "search.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/product.html'),
            filename: "product.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/purchases.html'),
            filename: "purchases.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/cart.html'),
            filename: "cart.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/sellers.html'),
            filename: "sellers.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/account.html'),
            filename: "account.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/contact.html'),
            filename: "contact.html",
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, '../src/support.html'),
            filename: "support.html",
            inject: "body",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ico|jpg|jpeg|png|gif|webp)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                        publicPath: '../images/',
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff|woff2)(\?.*$|$)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts/',
                    }
                }
            },
        ]
    }
};
