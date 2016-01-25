// Include gulp
var gulp = require('gulp')

// Include Our Plugins
var autoprefixer = require('autoprefixer'),
    buffer = require('vinyl-buffer'),
    webpack = require('webpack-stream'),
    webpackConf = require('./webpack.config.js'),
    concat = require('gulp-concat'),
    connect = require('connect'),
    cssnano = require('cssnano'),
    gutil = require('gulp-util'),
    lost = require('lost'),
    mqpacker = require('css-mqpacker'),
    named = require('vinyl-named'),
    open = require('gulp-open'),
    path = require('path'),
    postcss = require('gulp-postcss'),
    pxtorem = require('postcss-pxtorem'),
    sass = require('gulp-sass'),
    serveStatic = require('serve-static'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    through = require('through2'),
    uglify = require('gulp-uglify')

// Use path.join() for path generation to avoid cross-platform issues.
var paths = {
  dist: path.join('dist'),
  scripts: path.join('src'),
  styles: path.join('styles'),
  views: path.join()
}

gulp.task('scripts', () => buildScripts(true))
gulp.task('scripts-dev', () => buildScripts(false))

/**
 * Build the javascript
 * @param {boolean} shouldUglify - whether or not to minify the js
 * @returns {Gulp}
 */
function buildScripts (shouldUglify) {
  const soFar = gulp.src(paths.scripts)
    .pipe(named())
    .pipe(webpack(webpackConf))
    // .bundle()
    .on('error', gutil.log.bind(gutil, 'Webpack Error'))
    .pipe(through.obj(function (file,enc,cb) {
      // Dont pipe through any source map files
      var isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) this.push(file);
      cb();
    }))
  const _soFar = shouldUglify ? soFar.pipe(uglify())
                              : soFar
  return _soFar.on('error', gutil.log)
    .pipe(gulp.dest(paths.dist))
}

gulp.task('styles', () => buildStyles(true))
gulp.task('styles-dev', () => buildStyles(false))

/**
 * Build the styles
 * @param {boolean} shouldMinify - whether or not to minify the css
 * @returns {Gulp}
 */
function buildStyles (shouldMinify) {
  const processors = [
    lost,
    autoprefixer({browsers: ['last 5 versions']}),
    pxtorem({
      prop_white_list: [] // Leave Array Blank to transform all px values to rem
    }),
    mqpacker
  ] + shouldMinify ? [cssnano] : []

  return gulp.src([paths.styles + '/*.scss', paths.styles + '/*.css'])
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist))
}


gulp.task('serve', ['watch'], function () {
  var port = process.env.PORT || 8080

  var server = connect()
  server.use(require('serve-static')(__dirname + '/dist'))
  server.listen(port)

  gulp.src(__filename)
    .pipe(open({uri: 'http://localhost:' + port}))
})

gulp.task('watch', ['scripts-dev', 'styles-dev', 'views'], function () {
  console.log('For speed, the dev tasks are run.')
  console.log('Do not forget to run the `gulp build` task before deploying!')
  gulp.watch([paths.scripts + '/**/*.js'], ['scripts-dev'])
  gulp.watch([paths.styles + '/*.scss', paths.styles + '/*.css'], ['styles-dev'])
  gulp.watch([paths.views + '/index.html'], ['views'])
})

gulp.task('views', function () {
  return gulp.src([paths.views + '/index.html'])
    .pipe(gulp.dest(paths.dist))
})

gulp.task('build-dev', ['scripts-dev', 'styles-dev', 'views'])

gulp.task('build', ['scripts', 'styles', 'views'])

// Default Task
gulp.task('default', ['build'])
