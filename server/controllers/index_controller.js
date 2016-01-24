"use strict";

class IndexController {
    constructor () {}

    get (req, res) {
        res.render("main.hbs");
    }
}

export default new IndexController();
