var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		sass = require('gulp-sass'),
		plumber = require('gulp-plumber'),
		concat = require('gulp-concat'),
		source = require('vinyl-source-stream'),
		babelify = require('babelify'),
		reactify = require('reactify'),
		browserify = require('browserify');

var bundler = browserify({
  // Entry points to our app. In this case, it is the
  // app.js file (which loads our top-level component
  // and renders it to the index.html onto a div
  entries:      [ "./app/js/client/client.js" ],

  // Specify the 'translator' too that will convert JSX 
  // syntax to javascript. Babelify runs Babel, which 
  // is a javascript compiler
  transform:    [ reactify ],

  // Specify the specific 'translator(s)' needed to 
  // for the app. In this case, it is the react preset
  // package (babel-preset-react npm package). This
  // preset is also specified in the .babelrc file
  preset:       ["react"]

  // Use browserfiy in debug mode only when we are not
  // in production env
});

var build = function(watch) {

  // Performs the bundling of all the files, and concats
  // them into a bundle.js file in the dist folder
  // The bundle.js file is loaded by the index.html, and
  // contains all the application initialization/logic; 
  // basically, it is the application
  var rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', function (err) {
      console.log('Error with Browserify:', err);
    });
    stream = stream.pipe(source('bundle.js'));
    return stream.pipe(gulp.dest('./app/build'));
  };

  // Perform the bundling when this function is called
  return rebundle();

};

//Script Tasks
// gulp.task('scripts', function() {
// 	//grab all js files in app/js as well as js files within children of app/js
// 	//dont grab any files that already have the .min extension
// 	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
// 	.pipe(plumber())
// 	//rename all files with .min so they don't overwrite our working directory files
// 	.pipe(rename({suffix:'.min'}))
// 	//uglify code
// 	.pipe(uglify())
// 	.pipe(build())
//   //pipes all new files to app/js destination
// 	.pipe(gulp.dest('app/js'));
// })

//Sass tasks
gulp.task('scss', function(){
	return gulp.src('app/scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('style.css'))
	.pipe(rename({suffix:'.min'}))
	.pipe(gulp.dest('app/css'));
});

gulp.task('build', function(){
	return build();
});

//Watch Tasks
//anytime any of our js files are updated, gulp runs the scripts task
gulp.task('watch', function(){
	gulp.watch('app/js/**/*.js', ['build']);
	gulp.watch('app/scss/**/*.scss', ['scss']);
});

//Default task 
//runs when you enter gulp into console, sets up watch task
gulp.task('default', ['build', 'scss', 'watch']);