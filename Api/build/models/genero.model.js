"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var generoSchema = new _mongoose.Schema({
  nombre: String
}, {
  versionKey: false
});

var _default = (0, _mongoose.model)("Generos", generoSchema);

exports["default"] = _default;