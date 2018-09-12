const path = require('path')
//const Uglify = require("uglifyjs-webpack-plugin");
const webpack = require("webpack")

const SRC_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'client/static');

module.exports = {
  entry: path.resolve(SRC_DIR, "index.js"),
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  node: {
    fs: "empty",
    module: "empty",
    child_process: "empty",
    net: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/react"] }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: "file-loader",
        options: {}
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: "html-loader" }
      }
    ]
  },
  plugins: [
    // new Uglify(),
    //   new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
  ]
};