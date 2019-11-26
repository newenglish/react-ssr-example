const path = require('path');
module.exports = {
    mode: 'production',
    entry: "./client/index.js",
    output: {
        filename: "app.js",
        path: path.join(__dirname, './client/dist'),
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
    target: "web",
}