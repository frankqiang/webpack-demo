const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',//入口js文件
  output: {
    filename: 'index.[contenthash].js'//生成的js文件
  },
  plugins: [
    new HtmlWebpackPlugin({//生成HTML文件
    title:'TYQ',//HTML标题
    template:'src/assets/index.html',//文件路径
  })
]
};
