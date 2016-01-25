var path = require('path');

const PATHS = {
  src: './src'
}

module.exports = {
  entry: PATHS.src + "/main",
  resolve: {
    extensions: ['','.js','.jsx']
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.src
      },
      { test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015', 'survivejs-kanban']
        },
        include: PATHS.src
      }
    ]
  }
};
