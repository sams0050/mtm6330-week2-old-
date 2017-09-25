const gulp = require('gulp')
const sass = require('gulp')

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})
