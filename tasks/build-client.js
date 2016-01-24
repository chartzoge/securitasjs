var browserify = require("browserify");
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");

var watchify = require("watchify");
var babelify = require("babelify");

var _ = require("lodash");

var BUILD_FILES = [{
    input: "application.js",
    rebundleOnChange: true,
    output: {
        dev: "application.js",
        prod: "application.min.js"
    }
}];

function compile(gulp, buildFile, destFileName) {
    var filePath = process.cwd() + "/client/" + buildFile.input;
    var outputPath = process.cwd() + "/public/js/";

    var bundler = watchify(browserify(filePath, {
        debug: true
    }).transform(babelify));

    function rebundle() {
        bundler.bundle()
        .on("error", function (err) {
            console.error("Error while rebundling", err);
            this.emit("end");
        })
        .pipe(source(destFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(outputPath));
    }

    if (buildFile.rebundleOnChange) {
        bundler.on("update", function () {
            console.log("Rebundling: " + buildFile.input);
            rebundle();
        });
    }

    rebundle();
}

module.exports = function (gulp, config) {

    gulp.task("client:browserify", function () {
        _.each(BUILD_FILES, (buildFile) => {
            var outputFileName = config.isDev ? buildFile.output.dev : buildFile.output.prod;
            compile(gulp, buildFile, outputFileName);
        });
    });
}
