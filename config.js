
module.exports = {
  DEBUG: process.env.NODE_ENV !== 'production',
  // Port used by express
  expressPort: process.env.PORT || 8080,
  // webpack + server
  host: process.env.HOST || '0.0.0.0',
  // Port used by the webpack-dev-server
  webpackDevServerPort: 2992,
  // webpack tmp dir
  tmpDir: '_tmp',
  // app.js
  appName: 'app',
  // vendor.js
  vendorName: 'vendor',
  // inline.js
  inlineName: 'inline',
  // stats.json
  statsName: 'stats'
}
