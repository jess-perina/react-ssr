const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // building bundle for node, not the browser
  target: 'node',

  // root file of server aplication
  entry: './src/index.js',

  // where to put the output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
