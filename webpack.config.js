const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: false,
        compress: true,
        hot: true,
        host: '0.0.0.0',
        port: 4000,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
          filename: 'index.html',
          template: 'src/index.html'
        })
      ]
}