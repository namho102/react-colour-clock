var path = require('path');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            include: path.join(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                "presets": ["es2015", "react"]
            }
        }]
    },
};