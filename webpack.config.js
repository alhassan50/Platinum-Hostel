const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'Javascript/bundle.js'
    },
    watch: true,
    devtool: "eval-cheap-source-map"
}