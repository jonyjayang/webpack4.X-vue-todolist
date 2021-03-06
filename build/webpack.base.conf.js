const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    bundle: path.join(__dirname, '../src/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
    'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
    },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
         loader:'file-loader',
         options: {
          limit: 10000,
          name: '[name].[hash:7].[ext]',
          publicPath:'../images',
          outputPath:'/images'
        }
        }
        ],
      },
     
        {
          test: /\.jsx$/,
          loader: 'babel-loader'
        },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.styl/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',  
          'postcss-loader',
          'stylus-loader',
       
        ],
      }
    ]
  },
  optimization:{
    splitChunks:{
      chunks:'all'
      //讲nodemodule文件打包时分离
    },
    runtimeChunk:true
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.join(__dirname, 'template.html')
    }
    ),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "../dist/css/[name].css",
      // chunkFilename: "[id].css"
    })
  
  ]
};

