const path = require('path')
const APP_DIR = path.join(__dirname, 'src', 'client', 'app')
const BUILD_DIR = path.join(__dirname, 'src', 'client', 'public')

module.exports = {
  mode: 'development',
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: 'js/[name].bundle.js',
    publicPath: '/app/'
  },
  devServer: {
    contentBase: APP_DIR,
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]',
          }
        }
      }
    ]
  }
}
