"use strict";

var _app = _interopRequireDefault(require("./app"));

var _config = _interopRequireDefault(require("./config"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//inicando el servidor
_app["default"].listen(_config["default"].port, function () {
  console.log("server on http:\\localhost:".concat(_config["default"].port));
});