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
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            }
          }
        ]
      },
    ],
  },
}
