"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var librosShema = new _mongoose.Schema({
  titulo: String,
  autor: String,
  //mientras se crea el modelo de autores
  img: String,
  descripcion: String,
  comentarios: [{
    type: String
  }],
  //es una array pero todabia no la uso falta el modelo de comentarios
  pdf: String // mientras colocare el link mientras configuro para que suba archivos

}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Libros', librosShema);

exports["default"] = _default;