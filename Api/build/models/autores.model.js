"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var autoresSchema = new _mongoose.Schema({
  nombre: String,
  apellido: String,
  nacionalidad: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Autores', autoresSchema);

exports["default"] = _default;