const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
    publicPath: '/bundle/'
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.s?css/,
        exclude: /node_modules/,
        use: [
          process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader: 
        'style-loader',
        'css-loader', 
        'sass-loader',],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  devServer: {
    publicPath: '/bundle/',
    proxy: {
      '/api': 'http://localhost:3000'
    },
    hot: true,
},
}