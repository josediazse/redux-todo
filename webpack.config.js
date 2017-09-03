const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

module.exports = (env) => {
	console.log(`Environment: ${env}`)
	const envConfig = require(`./build-utils/webpack.${env}`)
	return webpackMerge(commonConfig, envConfig)
}