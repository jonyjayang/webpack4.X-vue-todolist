const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
module.exports = merge(baseConfig, {
  output: {
    path:  path.join(__dirname, '../dist'),
    filename: path.join('js/[name].[chunkhash].js'),
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: []
  },
  plugins: [
    new CleanWebpackPlugin(['dist/'], {
      root: path.resolve(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    // new CompressionWebpackPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: new RegExp('\\.(js|css)$'),
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
});

