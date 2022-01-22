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
],
module:{
  rules:[
    {
      test:/\.(png|svg|jpg|gif)$/,
      use:['file-loader']//作用：把文件变为文件的路径
    },
    {
      test:/\.styl$/,
      loader:['style-loader','css-loader','stylus-loader']
    },
    {
      test:/\.less$/,
      loader:['style-loader','css-loader','less-loader']
    },
    {
      test:/\.scss$/i,
      use:[
        //Create 'style' nodes from JS strings
        'style-loader',
        //Translate CSS into CommonJS
        'css-loader',
        //Compiles Sass to CSS
          {
            loader:"sass-loader",
            options:{
              implementation:require('dart-sass'),
            },
          },
      ],
    },
  ],
},
};
