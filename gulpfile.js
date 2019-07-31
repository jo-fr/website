var gulp = require("gulp");
var fileInline = require("gulp-file-inline");
var htmlmin = require("gulp-html-minifier2");
var modifyCssUrls = require("gulp-modify-css-urls");

gulp.task("minify", function() {
  return gulp
    .src("index.html")
    .pipe(fileInline())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
});
