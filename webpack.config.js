const path = require('path');

module.exports = {
    mode: 'development',
    module:{
        rules:[
            {
                test: /\.jpg/,
                use: {
                    loader: 'file-loader'
                }
            } 
        ]
    },
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
