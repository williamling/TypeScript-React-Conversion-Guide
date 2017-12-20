const path = require('path');

module.exports = {
  // change to .tsx if necessary
  entry: './src/app.tsx',
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        use: [
          { loader: "style-loader" },
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      },
    ]
  },
  // newline - add source-map support
  devtool: "source-map"
}
