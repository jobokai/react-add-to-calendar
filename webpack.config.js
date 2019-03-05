var webpack = require('webpack')
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'build');

module.exports = {
  output: {
    filename: 'ReactAddToCalendar.min.js',
    path: distPath,
    libraryTarget: 'commonjs'
  },
  name: 'ReactAddToCalendar',
  entry: './src/ReactAddToCalendar.js',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}