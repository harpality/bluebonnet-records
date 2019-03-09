const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(svg|css)$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}],
          {loader: 'file-loader'}],
      },
    ],
  },
}
