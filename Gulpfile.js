/**
 *
 * Config item
 *
 */
var config = {
  app: './app/',
  build: '.build',
  src: './src/'
};

var path = {
  bower: './bower_components/',
  assets: config.app+'assets/',
  scss : config.src+'scss/',
  js : config.src+'js/'
}

/**
 *
 * Required
 *
 */
var gulp = require('gulp'),
    plugins = require('gulp-load-plugins'),
    $ = plugins(),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    argv = require('yargs').argv;


/**
 *
 * SCSS task
 *
 */
var sassOptions = {
  errLogToConsole: true,
  includePaths: [
    path.bower,
    path.bower+'csskit/src/scss'
  ],
  outputStyle: 'nested'
};

var prefixerOptions = {
  browsers: [
    'last 2 versions',
    '> 1%',
    'ie 9'
  ]
};

gulp.task('scss', function () {
  return gulp
    .src(path.scss+'app.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions).on('error', $.sass.logError))
    .pipe($.autoprefixer(prefixerOptions))
    .pipe($.if(argv.production, $.cssmin()))
    .pipe($.if(argv.production, $.rename({suffix: '.min'})))
    .pipe($.if(!argv.production, $.sourcemaps.write('../sourcemaps')))
    .pipe(gulp.dest(path.assets+'css'))
    .pipe(reload({
      stream:true
    }));
});


/**
 *
 * Scripts task
 *
 */
var uglifyOptions = {
  compress: {
    sequences: true,
    dead_code: true,
    conditionals: true,
    booleans: true,
    unused: true,
    if_return: true,
    join_vars: true,
    drop_console: true
  }
}
gulp.task('script', function(){
  return gulp
    .src([
      path.bower+'jquery/dist/jquery.js',
      path.bower+'velocity/velocity.js',
      path.js+'main.js'
    ])
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    .pipe($.if(argv.production, $.uglify(uglifyOptions)))
    .pipe($.if(argv.production, $.rename({suffix: '.min'})))
    .pipe($.if(!argv.production, $.sourcemaps.write('../sourcemaps')))
    .pipe(gulp.dest(path.assets+'js'))
    .pipe(reload({
      stream:true
    }));
});


/**
 *
 * PHP task
 *
 */
gulp.task('php', function(){
  return gulp
    .src(config.app+'**/*.php')
    .pipe(reload({
      stream:true
    }));
});


/**
 *
 * Browser-Sync task
 *
 */
gulp.task('browser-sync', function(){
  browserSync({
    proxy: 'dev.project.com/product-quick-view/app'
  });
  //$.connectPhp.server({
  //  base: config.app
  //}, function (){
  //});
});


/**
 *
 * Watch task
 *
 */
gulp.task('watch', function(){
  gulp.watch('./Gulpfile.js', ['base']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  gulp.watch(path.scss+'**/*.scss', ['scss']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  gulp.watch(path.js+'**/*.js', ['script']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
  gulp.watch(config.app+'**/*.php', ['php']).on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});


/**
 *
 * Default task
 *
 */
gulp.task('base', ['scss', 'script', 'php']);
gulp.task('default', ['base', 'browser-sync', 'watch']);