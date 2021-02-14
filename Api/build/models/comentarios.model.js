"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var comentariosSchema = new _mongoose.Schema({
  contenido: String,
  id_usuario: [{
    type: String
  }]
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Comentarios', comentariosSchema);

exports["default"] = _default;