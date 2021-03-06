var path    = require('path');
var hwp     = require('html-webpack-plugin');

module.exports = {
    entry: './demo/App.js',
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')
    },
    module:{
        rules:[
        {
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/i,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
    ]
    },
    plugins:[
        new hwp({template: './demo/index.html'})
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    }
}