import gulp from "gulp";
import notify from "gulp-notify";
import source from "vinyl-source-stream";
import browserify from "browserify";
import babelify from "babelify";
import ngAnnotate from "browserify-ngannotate";
import browserSync from "browser-sync";
import rename from "gulp-rename";
import templateCache from "gulp-angular-templatecache";
import uglify from "gulp-uglify";
import merge from "merge-stream";

browserSync.create();

const jsFiles = "src/js/**/*.js";
const viewFiles = "src/js/**/*.html";

const interceptErrors = function(error) {
  const args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);
  this.emit("end");
};

gulp.task("browserify", ["views"], () => {
  return browserify("./src/js/app.js")
    .transform(babelify)
    .transform(ngAnnotate)
    .bundle()
    .on("error", interceptErrors)
    .pipe(source("main.js"))
    .pipe(gulp.dest("./build/"));
});

gulp.task("html", () => {
  return gulp.src("src/index.html")
    .on("error", interceptErrors)
    .pipe(gulp.dest("./build/"));
});

gulp.task("views", () => {
  return gulp.src(viewFiles)
    .pipe(templateCache({
      standalone: true
    }))
    .on("error", interceptErrors)
    .pipe(rename("app.templates.js"))
    .pipe(gulp.dest("./src/js/config/"));
});

gulp.task("build", ["html", "browserify"], () => {
  const html = gulp.src("build/index.html").pipe(gulp.dest("./dist/"));

  const js = gulp.src("build/main.js")
               .pipe(uglify())
               .pipe(gulp.dest("./dist/"));

  return merge(html, js);
});

gulp.task("default", ["html", "browserify"], () => {
  browserSync.init(["./build/**/**.**"], {
    server: "./build",
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("src/index.html", ["html"]);
  gulp.watch(viewFiles, ["views"]);
  gulp.watch(jsFiles, ["browserify"]);
});
