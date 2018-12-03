const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'demo/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        alias: {
            'react-form': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/index.html'
        })
    ]
}