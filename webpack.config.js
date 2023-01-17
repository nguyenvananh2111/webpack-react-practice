const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  const mode = env.mode === "production" ? "production" : "development";
  const title = env.mode === "production" ? "Anh Soft" : "App for development";
  return {
    mode,
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, "dist"),
      clean: true,
      assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"], // import without extensions
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: "./public/index.html",
      }),
    ],
  };
};
