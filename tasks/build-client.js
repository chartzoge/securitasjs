var browserify = require("gulp-browserify");
var sourcemaps = require("gulp-sourcemaps");
var rename = require("gulp-rename");

var watchify = require("watchify");
var babelify = require("babelify");

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

// https://gist.github.com/danharper/3ca2273125f500429945

function compile(shouldWatch, buildFile) {
}

module.exports = function (gulp, config) {

    gulp.task("client:browserify", function () {
        _.each(BUILD_FILES, (buildFile) => {
            var outputFileName = config.isDev ? buildFile.output.dev : buildFile.output.prod;


    });
}
