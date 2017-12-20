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
      { test: /\.jsx?$/, use: { loader: 'babel-loader' } }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },

  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: '5010',
    disableHostCheck: true,
  },
}
