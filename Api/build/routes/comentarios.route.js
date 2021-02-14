"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _comentarios = _interopRequireDefault(require("../controllers/comentarios.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/comentarios', _comentarios["default"].getComentarios); //obtener uno por id

router.get('/comentarios/:id'); //agregarautor

router.post('/comentarios', _comentarios["default"].addComentario); //editar

router.put('/comentarios/:id'); //eliminar

router["delete"]('/comentarios/:id');
var _default = router;
exports["default"] = _default;