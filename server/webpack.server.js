const path = require('path')

module.exports = {
  // building bundle for node, not the browser
  target: 'node',

  // root file of server aplication
  entry: './src/index.js',

  // where to put the output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // run babel on every file we want
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      }
    ]
  }
}
