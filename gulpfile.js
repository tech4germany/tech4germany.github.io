var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
let cleanCSS = require('gulp-clean-css');
 

gulp.task("default", ["serve"]);


// Static Server + watching files
gulp.task("serve", ["minify-css"], function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch("scss/**/*.scss", ["minify-css"]);
  gulp.watch("slick/slick.js").on("change", browserSync.reload);
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers (custom)
gulp.task("sass", function() {
  return gulp
    .src("scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

// Autoprefixer will use the data based on current browser popularity
// and property support to apply prefixes for you (custom & bootstrap-4.1.3)
gulp.task("autoprefixer", ["sass"], function() {
  var postcss = require("gulp-postcss");
  var sourcemaps = require("gulp-sourcemaps");
  var autoprefixer = require("autoprefixer");

  return gulp
    .src("dist/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});

gulp.task('minify-css', ["autoprefixer"], () => {
  return gulp.src('dist/**/*.css')
    .pipe(cleanCSS({debug: true}, (details) => {
      console.log(`${details.name}: ${details.stats.originalSize}`);
      console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
  .pipe(gulp.dest('css'))
  .pipe(gulp.dest('docs/.vuepress/public/css'));
});
