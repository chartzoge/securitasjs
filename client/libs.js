window.require = function(x) {
    var exports = {
        react: require("react")
    };
    return exports[x];
};
