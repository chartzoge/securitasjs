var browserify = require("gulp-browserify");
var rename = require("gulp-rename");
var _ = require("lodash");

var BUILD_FILES = [{
    input: "application.js",
    output: {
        dev: "application.js",
        prod: "application.min.js"
    }
}, {
    input: "libs.js",
    output: {
        dev: "libs.js",
        prod: "libs.min.js"
    }
}];

module.exports = function (gulp, config) {

    gulp.task("client:browserify", function () {
        _.each(BUILD_FILES, (buildFile) => {
            var outputFileName = config.isDev ? buildFile.output.dev : buildFile.output.prod;

            gulp.src(process.cwd() + "/client/" + buildFile.input)
            .pipe(browserify({
                insertGlobals: true,
                debug: config.isDev
            }))
            .pipe(rename(outputFileName))
            .pipe(gulp.dest(process.cwd() + "/public/js/"));
        });
    });
}
