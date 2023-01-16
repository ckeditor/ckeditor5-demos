/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

'use strict';

/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const { bundler, styles } = require('@ckeditor/ckeditor5-dev-utils');
const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	performance: { hints: false },

	entry: './index.js',

	output: {
		path: path.resolve( __dirname, 'dist' )
	},

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
		new CKEditorTranslationsPlugin( {
			// The main language that will be built into the main bundle.
			language: 'en',

			// Additional languages that will be emitted to the `outputDirectory`.
			// This option can be set to an array of language codes or `'all'` to build all found languages.
			// The bundle is optimized for one language when this option is omitted.
			additionalLanguages: 'all',
			addMainLanguageTranslationsToAllAssets: true

			// For more advanced options see https://github.com/ckeditor/ckeditor5-dev/tree/master/packages/ckeditor5-dev-translations.
		} ),
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
