const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "public/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "public/src/index.js"),
    output: {
      path: path.join(__dirname, "public/dist"),
      filename: "bundle.js",
  },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/react']
              }
            }
          },
          {
            test: /\.(s*)css$/,
            use: [
              {
                loader: 'style-loader',
              },
              {
                loader: 'css-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: ['./node_modules'],
                },
              },
            ],
          },
          {
            test: /\.(png|jp(e*)g|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  name: 'assets/[hash]-[name].[ext]',
                },
              },
            ],
          },
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001,
        historyApiFallback: true,
    }
};