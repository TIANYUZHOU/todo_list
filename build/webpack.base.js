//导入path模块
const path = require('path')

//引入vue-loader的插件
const VueloaderPlugin = require('vue-loader/lib/plugin')

//引入html-webpack-plugin 将html打包到dist
const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入clean-webpack-plugin 清除原来打包的文件再打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    //打包入口文件
    entry: './src/main.js',
    //打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')  //path.resolve当前目录创建‘dist’文件夹，打包生成‘bundle.js’文件
    },
    //打包规则
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'   // 将ES6语法转化为低版本浏览器支持的js语法
            },
            {
                test: /\.vue$/,  //正则表达式，匹配要打包文件
                loader: 'vue-loader'  //指定打包工具
            },
            // {
            //     test: /\.(jpg|jpeg|png|svg)$/,
            //     loader: 'file-loader',   //文件打包的工具
            //     options: {
            //         name: '[name].[ext]'
            //     }
            // },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 2048             //图片小于2048byte以base64打包入js。大于就默认调用'file-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']  //注意顺序，从右到左执行 css-loader打包 style-loader 挂载到页面头部
            },
            {
                test: /\.styl(us)?$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']  //stylus-loader生成css文件
            }]
    },
    //插件
    plugins: [
        new VueloaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'  //以当前目录的index.html为模板
        }),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',    //在main.js中默认引入'vue'是vue.common.js是运行时的vue。直接正在浏览器中运行会报错
            '@': path.resolve(__dirname, '../src'),             //给路径取别名方便编写
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images'),
        }
    }
}