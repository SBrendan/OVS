
const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WriteFilePlugin = require('write-file-webpack-plugin');

var entries = ['./client/src/main.tsx'];

var plugins = [
  new ExtractTextPlugin({
    filename: 'css/bundle.css',
    allChunks: true,
  }),
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    template: 'client/src/index.ejs',
    filename: 'index.html',
    inject: true,
  }),
  new WriteFilePlugin({
    test: /\.tmpl$/,
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/), // https://stackoverflow.com/a/25426019
];

module.exports = {
  entry: entries,
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'client/dist'),
  },
  devServer: {
    open: true,
    port: 8080,
    hot: true,
    inline: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    stats: {
      colors: true,
    },
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /.ttf$|.eot$|.woff2?$|\.svg$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name]-[hash].[ext]',
          publicPath: 'http://localhost:8080/'
        },
      },
      {
        test: /.png$|.jpe?g$|.ico?$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name]-[hash].[ext]',
          publicPath: 'http://localhost:8080/'
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sourceMapContents: true,
              },
            },
          ],
        }),
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: plugins
} 