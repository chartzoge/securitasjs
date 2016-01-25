"use strict";

import indexController from "./controllers/index_controller";
import commentsController from "./controllers/comments_controller";

export const createRoutes = app => {
    app.get("/", indexController.get);

    app.get("/comments", commentsController.get);
}
