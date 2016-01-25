var ReactDOM = require("react-dom");
var React = require("react");

//components
var CommentBox = require("./components/comment_box").CommentBox;

ReactDOM.render(
    <CommentBox />,
    document.getElementById("content")
);
