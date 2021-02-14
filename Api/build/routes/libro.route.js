"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _libros = _interopRequireDefault(require("../controllers/libros.controller"));

var _auntenticador = require("../middlewares/auntenticador");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/libros', _libros["default"].getLibros); //obtener uno por id

router.get('/libros/:id', _auntenticador.verifyLibro, _libros["default"].getLibro); //agregar

router.post('/libros', [_auntenticador.verifyToken, _auntenticador.isAdmin], _libros["default"].addLibro); //editar

router.put('/libros/:id', [_auntenticador.verifyToken, _auntenticador.isModerator, _auntenticador.verifyLibro], _libros["default"].editLibro); //eliminar

router["delete"]('/libros/:id', [_auntenticador.verifyToken, _auntenticador.verifyLibro, _auntenticador.isAdmin], _libros["default"].deleteLibro);
var _default = router;
exports["default"] = _default;