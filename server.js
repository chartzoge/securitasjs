"use strict";

import express from "express";

var app = express();

app.use(express.static("public"));

require("./server/app_config/views").setupViews(app);
require("./server/routes").createRoutes(app);
require("./server/app_config/http").bootServer(app);
