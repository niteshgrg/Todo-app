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
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(projectRootPath, "src")
         },
         {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            include: path.join(projectRootPath, "src")
        }
      ]
   }
}

module.exports = config;
