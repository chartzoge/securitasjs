"use strict";

// libs
// TODO: Move to libs.js
import React from "react";
import ReactDOM from "react-dom";
import Promise from "bluebird";
import $ from "jquery";

//components
var CommentBox = require("./components/comment_box").CommentBox;

ReactDOM.render(
    <CommentBox url="/comments" />,
    document.getElementById("content")
);
