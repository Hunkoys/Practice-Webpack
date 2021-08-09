const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(?!-i-).*\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'images/[hash][ext][query]',
        // },
      },
      {
        test: /-i-.*\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/inline',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        // generator: {
        //   filename: 'fonts/[hash][ext][query]',
        // },
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities'),
      Img: path.resolve(__dirname, 'img'),
    },
  },
};
