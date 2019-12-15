"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Demo = function (_a) {
    var name = _a.name;
    return React.createElement("div", null,
        "Artemis Labs ",
        name,
        "! ");
};
ReactDOM.render(React.createElement(Demo, { name: "OS" }), document.getElementById("app"));
