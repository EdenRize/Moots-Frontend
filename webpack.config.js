module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [{
            test: /\.scss$/,
            use: 'sass-loader'
        }]
    }
}
