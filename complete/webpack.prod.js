const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const project = require('./project.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: project.title,
      template: 'src/index.html',
    }),
  ],
});
