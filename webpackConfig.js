const webpackConfig = `var path = require('path');

// build_dir represents the directory path of the bundle file output
var BUILD_DIR = path.resolve(__dirname, 'public');
// app_dir holds the directory path of the react application's codebase
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        include: APP_DIR,
        loader : 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  devServer: {
    contentBase: "public",
    hot: true
  }
};

module.exports = config;`;

module.exports = webpackConfig;

