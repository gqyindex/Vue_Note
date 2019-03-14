const path = require('path');

//引入插件
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        })
    ],
    module: {
        rules: [ // 定义css规则
            {
                test: /\.css$/, // 正则匹配要识别的css
                use: [
                    {
                        loader: 'style-loader' // 使用style-loader进行处理，位置必须在css-loader前面
                    },
                    {
                        loader: 'css-loader' // 使用css-loader进行处理
                    }
                ]
                //use:['style-loader','css-loader'] // 此处也可以这样写
            },
            {
                test: /\.less$/, // 正则匹配要识别的css
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.sass$/, // 正则匹配要识别的css
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|jpeg|bmp)$/, // 正则匹配要识别的css
                use: 'url-loader?name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/, // 正则匹配要识别的css
                use: 'url-loader'
            }
        ]
    }
}