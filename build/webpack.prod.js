const baseConfig = require('./webpack.base.js')

const {merge} = require('webpack-merge')


const prodConfig = {
    //模式production是生产环境下面这么是开发环境模式
    mode: 'production',
}

module.exports = merge(baseConfig, prodConfig)

