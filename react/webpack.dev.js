const HtmlWebpackPlugin = require('html-webpack-plugin');
const project = require('./project');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '(Served) ' + project.title,
      template: 'src/client/index.html',
    }),
  ],
};
