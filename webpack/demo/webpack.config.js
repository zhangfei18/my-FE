const path = require('path')
const ZfPlugin = require('./plugins/ZfPlugin.js')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'mains.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              useBuiltIns: false,
              "targets": {
                "edge": "17",
                "firefox": "60",
                "chrome": "67",
                "safari": "11.1",
                "node": true
              },
            }]],
            plugins: [['@babel/plugin-transform-runtime', {
              corejs: 3
            }]]
          }
        }
      }
    ]
  },
  plugins: [new ZfPlugin()]
}