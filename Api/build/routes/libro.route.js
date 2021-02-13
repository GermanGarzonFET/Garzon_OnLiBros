"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _libros = _interopRequireDefault(require("../controllers/libros.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/libros', _libros["default"].getLibros); //obtener uno por id

router.get('/libros/:id', _libros["default"].getLibro); //agregar

router.post('/libros', _libros["default"].addLibro); //editar
//eliminar

var _default = router;
exports["default"] = _default;