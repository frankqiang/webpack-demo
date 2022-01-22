const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base=require('./webpack.config.base')
module.exports = {
  mode: 'development',
  ...base,
  devtool:'inline-source-map',//使用dev-server
  devServer:{
      contentBase:'./dist',
    },
  module:{
    rules:[
      {
        test:/\.css$/i,
        use:['style-loader','css-loader'],
      },
    ],
  }
};
