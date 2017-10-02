const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('dev', ['scss'], function () {

	browserSync.init({
		server: './docs',
		open: false
	});

	gulp.watch('./**/*.scss', ['scss']);
	gulp.watch('docs/*.html').on('change', browserSync.reload);
});

gulp.task('scss', function () {
	return gulp.src('to-learn.scss')
		.pipe(sourcemaps.init())
		.pipe(gulpSass({
			outputStyle: 'compressed'
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('docs/css'))
		.pipe(browserSync.stream());
});

gulp.task('build', () => console.log('Task for development...'));