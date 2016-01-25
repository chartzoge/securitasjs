"use strict";

const TEST_DATA = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class CommentsController {
    constructor () {}

    get (req, res) {
        res.json({
            comments: TEST_DATA
        });
    }
}

export default new CommentsController();
