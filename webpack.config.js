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
            loaders: ['style', 'css', 'sass'],
            include: path.join(projectRootPath, "src")
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader",
          query: { limit: "8192" } }
      ]
   }
}

module.exports = config;
