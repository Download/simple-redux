const path = require('path');

// process.env.BABEL_ENV = TARGET;

const PATHS = {
  src: './src'
};



module.exports = {
  entry: PATHS.src + "/index",
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
        loaders: [
          'babel?cacheDirectory,presets[]=react,presets[]=es2015,presets[]=survivejs-kanban',
        ],
        // query: {
        //   cacheDirectory: true,
        //   presets: ['es2015']
        // },
        include: PATHS.src
      }
    ]
  }
};
