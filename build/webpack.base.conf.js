const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        use: [
          'file-loader'
        ]
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
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
      
    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
    //   {
    //   template: path.resolve(__dirname, '../index.html')
    // }
    ),
    new VueLoaderPlugin(),
  ]
};

