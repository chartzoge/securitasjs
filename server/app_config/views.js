"use strict";

import handlebars from "handlebars";
import expressHandlebars from "express-handlebars";

export const setupViews = app => {
    var viewsDirectory = process.cwd() + "/server/views"
    var layoutsDirectory = process.cwd() + "/server/views/layouts";
    var partialsDirectory = process.cwd() + "/server/views/pages";

    app.set("views", viewsDirectory);
    app.set("view engine", "hbs");

    app.handlebars = handlebars;
    // TODO: add any handlebars helpers here

    app.engine("hbs", expressHandlebars({
        defaultLayout: "main",
        layoutsDir: layoutsDirectory,
        partialsDir: partialsDirectory,
        extname: ".hbs",
        handlebars: handlebars
    }));
}
