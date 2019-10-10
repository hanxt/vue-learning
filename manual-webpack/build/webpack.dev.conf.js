const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig,{
  devServer:{
    contentBase: path.resolve(__dirname,'../dist'),
    inline: true,
    port: 7777
  }
});
