const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const BUILD = env.WEBPACK_BUILD;
  const SERVE = env.WEBPACK_SERVE;

  return {
    mode: BUILD ? 'production' : 'development',
    entry: './src/index.js',
    ...(SERVE && { devtool: 'eval-source-map' }),
    devServer: {
      contentBase: './dist',
      open: '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My Webpack',
      }),
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    optimization: {
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
