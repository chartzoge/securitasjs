"use strict";

const SERVER_PORT = 8080;

export const bootServer = app => {
    app.listen(SERVER_PORT, () => {
        console.log("Server listening and booted on: " + SERVER_PORT);
    });
}
