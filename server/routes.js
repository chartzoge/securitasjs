"use strict";

import indexController from "./controllers/index_controller";

export const createRoutes = app => {
    app.get("/", indexController.get);
}
