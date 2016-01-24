"use strict";

class IndexController {
    constructor () {}

    get (req, res) {
        res.render("pages/main");
    }
}

export default new IndexController();
