const path = require('path');
module.exports = {
    mode: 'production',
    entry: "./server/app.js",
    output: {
        filename: "app.js",
        path: path.join(__dirname, './'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }],
    },
    target: "node",
}