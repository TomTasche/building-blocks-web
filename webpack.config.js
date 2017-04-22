var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var cssExtract = new ExtractTextPlugin('bundle.css')

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: cssExtract.extract({
        use: 'css-loader'
      })
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }
    },
    {
      test: /\.html$/,
      use: {
        loader: 'html-loader',
        options: {
          minimize: true
        }
      }
    }]
  },
  plugins: [
    cssExtract,
    new HtmlWebpackPlugin({
      filename: 'bundle.html',
      template: 'client/index.html'
    })
  ]
}
