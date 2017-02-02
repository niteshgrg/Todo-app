var path = require("path");
var projectRootPath = path.resolve(__dirname, '../');

var config = {
   entry: "./src/main.js",

   output: {
      path: projectRootPath,
      filename: 'bundle.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   debug: true,

   devtool: "eval-source-map",

   module: {
      loaders: [
         {
            test: /\.js?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
          query: { limit: "8192" }
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader"
        }
      ]
   }
}

module.exports = config;
