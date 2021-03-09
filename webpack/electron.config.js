const path = require('path');

module.exports={
    devtool:'source-map',
    entry: path.resolve(__dirname, '..', 'electron', 'main.js'),
    target:'electron-main',
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    },
    node:{
        __dirname: false
    },
    output:{
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].js'
    }
}