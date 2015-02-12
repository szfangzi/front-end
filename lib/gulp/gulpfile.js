var gulp = require('gulp');
var amdOptimize = require("amd-optimize");
var concat = require('gulp-concat');

gulp.task("default", function () {

  return gulp.src("js/main.js")
    // Traces all modules and outputs them in the correct order.
    .pipe(amdOptimize("main", {
  		configFile : "require_config.js"
	}))
    .pipe(concat("index.js"))
    .pipe(gulp.dest("dist/scripts"));

});