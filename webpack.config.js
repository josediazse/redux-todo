const commonConfig = require("./config/webpack.common")
const webpackMerge = require("webpack-merge")

module.exports = env => {
  const envConfig = require(`./config/webpack.${env.env}`)
  return webpackMerge(commonConfig, envConfig)
}
