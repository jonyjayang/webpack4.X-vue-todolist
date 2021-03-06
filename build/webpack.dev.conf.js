const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port:'8000',
    host:'localhost',
    hot: true,
    historyApiFallback:{
      index:'/index.html'
    }
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new VueSSRClientPlugin()
  ],
  
});
