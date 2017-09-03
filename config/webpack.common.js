const commonPaths = require('./common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: './src/index.js',
	output: {
		path: commonPaths.outputPath,
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' }
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}

module.exports = config