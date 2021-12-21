  const webpack = require('webpack');
  const path = require('path');
  const nodeExternals = require('webpack-node-externals');
  const TerserPlugin = require('terser-webpack-plugin');
  const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
  const MiniCssExtractPlugin = require("mini-css-extract-plugin");
  const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
  const {CleanWebpackPlugin} = require("clean-webpack-plugin");  



  let client = Object.assign({},{
    mode: 'development',
    devtool:'source-map',
    name:'client',
    target:'web',
    entry: path.resolve(__dirname, "src/client/index.tsx"),
    output: {
      filename: 'client.js',
      path: path.resolve(__dirname, 'build/static')
    },
    module:{
      rules:[
        {
          test: /\.ts(x)?$/,
          use: "ts-loader",
          exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        loader: 'file-loader',
        exclude: [/\.m?([jt])sx?$/, /\.json$/, /\.s?css$/],
        options: {
          name: 'image/[name].[hash:8].[ext]'
        }
      }
      ]
    },
    resolve: {
      extensions: [".tsx",".ts",".js"],
      modules: ["src", "node_modules"],
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({filename:'css/styles.css'}),
    ]
  });

  let server = Object.assign({}, {
    mode:"development",
    devtool:'source-map',
    name: 'server',
    target: 'node',
    externals: [nodeExternals()],
    entry: path.resolve(__dirname, "src/server/server.ts"),
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "build")
    },
    module:{
      rules:[
        {
          test: /\.ts(x)?$/,
          use: "ts-loader",
          exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
          loader: 'file-loader',
          exclude: [/\.m?([jt])sx?$/, /\.json$/, /\.s?css$/],
          options: {
            name: 'static/image/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    resolve: {
      extensions: [".tsx",".ts",".js"],
      modules: ["src", "node_modules"],
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({filename:'static/css/styles.css'}),
      new WebpackManifestPlugin({fileName:'asset-manifest.json'}),
    ]
  });

  module.exports = [client, server];