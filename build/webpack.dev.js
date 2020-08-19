const baseConfig = require('./webpack.base.js')

const {merge} = require('webpack-merge')

//导入webpack插件（热模块替换要用）
const webpack = require('webpack')


const devConfig = {
    //模式production是生产环境下面这么是开发环境模式
    mode: 'development',
    //sourcemap（源代码映射） 帮助定位bug
    devtool: 'eval' ,
    // devServer配置
    devServer: {
    // 指定服务器根目录
    contentBase: './dist',
    // 自动打开浏览器
    open: true,
    // 启用热模块替换
    hot: true
  },
    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}

module.exports = merge(baseConfig, devConfig)