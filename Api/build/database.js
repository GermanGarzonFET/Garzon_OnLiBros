"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//conexion a base de datos
_mongoose["default"].connect("mongodb://localhost:27017/onlibros", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('DB in On!!');
}).then(function (err) {
  return console.log(err);
});