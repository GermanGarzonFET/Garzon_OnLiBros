"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var librosShema = new _mongoose.Schema({
  titulo: String,
  id_autor: [{
    //una propidad de tipo id que hace referencia a los autores
    ref: "Autores",
    type: _mongoose.Schema.Types.ObjectId
  }],
  id_genero: [{
    //guarda a la id de los generos
    ref: "Generos",
    type: _mongoose.Schema.Types.ObjectId
  }],
  edicion: String,
  img: String,
  descripcion: String,
  id_comentarios: [{
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