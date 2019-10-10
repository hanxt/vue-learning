const uglifyJsPlugIn = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')

module.exports = merge(baseConfig,{
  plugins:[
    new  uglifyJsPlugIn() 
  ]
})