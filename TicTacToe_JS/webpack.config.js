const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
    ]
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: '5009',
    disableHostCheck: true,
  },
}
