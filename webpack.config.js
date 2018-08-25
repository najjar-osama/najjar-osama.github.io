const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: { name: "[name].[ext]", outputPath: "images/" }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new HtmlWebpackPlugin({
      inject: false,
      template: "./src/index.html",
      filename: "index.html"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};
