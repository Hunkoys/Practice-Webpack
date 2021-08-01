const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const B = env.WEBPACK_BUILD;
  const S = env.WEBPACK_SERVE;

  return {
    mode: B ? 'production' : 'development',
    entry: './src/index.js',
    ...(S && { devtool: 'eval-source-map' }),
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
