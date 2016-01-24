var gulp = require("gulp");

require("./tasks/build-client")(gulp, {
    isDev: true
});
