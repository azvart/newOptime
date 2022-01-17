const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('../webpack.base');
const ROOT_DIR = path.resolve(__dirname,'../../');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
const BUILD_DIR = resolvePath('dist');
const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: {
    client: ['webpack-hot-middleware/client?reload=true&noInfo=true', './src/client/index.tsx', 'babel-polyfill'],
  },
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  output: {
    path: resolvePath(BUILD_DIR, 'client'),
    publicPath: '/client/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  resolve: {
    ...baseConfig.resolve,
  },
  module: {
    ...baseConfig.module,
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new LoadablePlugin({
      outputAsset: false, 
      writeToDisk: true,
      filename: `${BUILD_DIR}/loadable-stats.json`,
    }),
  ],
  optimization: {
    runtimeChunk: 'single', 
    splitChunks: {
      chunks: 'all', 
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
    minimize: false,
    minimizer: [],
  },
};

module.exports = merge(baseConfig, clientConfig);