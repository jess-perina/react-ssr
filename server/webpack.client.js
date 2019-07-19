const path = require('path')

module.exports = {
  // root file of server aplication
  entry: './src/client/client.js',

  // where to put the output bundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
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
