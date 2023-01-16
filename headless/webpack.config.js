/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require( 'path' );
const webpack = require( 'webpack' );
const { bundler, styles } = require( '@ckeditor/ckeditor5-dev-utils' );
const TerserWebpackPlugin = require( 'terser-webpack-plugin' );

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: [
		'./index.js',
		'./index.jsx'
	],

	optimization: {
		minimizer: [
			new TerserWebpackPlugin( {
				sourceMap: true,
				terserOptions: {
					output: {
						// Preserve CKEditor 5 license comments.
						comments: /^!/
					}
				},
				extractComments: false
			} )
		]
	},

	plugins: [
		new webpack.BannerPlugin( {
			banner: bundler.getLicenseBanner(),
			raw: true
		} )
	],

	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: styles.getPostCssConfig( {
								themeImporter: {
									themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
								},
								minify: true
							} )
						}
					},
				]
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [ {
					loader: 'babel-loader',
					options: {
						presets: [
							[ '@babel/preset-env', {
								"targets": "defaults"
							} ],
							'@babel/preset-react'
						]
					}
				} ]
			}
		]
	},
	devServer: {
		static: {
			directory: path.join( __dirname, '/' ),
			watch: true,
		},
		watchFiles: [ './index.js', './index.html' ],
		compress: true,
		hot: false,
		port: 9090,
		devMiddleware: {
			index: true,
			mimeTypes: { phtml: 'text/html' },
			publicPath: '/',
			serverSideRender: true,
			writeToDisk: true,
		},
	},
};
