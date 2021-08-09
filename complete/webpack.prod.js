const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');
const project = require('./project.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(sass|scss)$/i,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: project.title,
      template: 'src/index.html',
    }),
  ],
});
