"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _autores = _interopRequireDefault(require("../controllers/autores.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/autor', _autores["default"].getAutores); //obtener uno por id

router.get('/autor/:id'); //agregarautor

router.post('/autor', _autores["default"].addAutor); //editar

router.put('/autor/:id'); //eliminar

router["delete"]('/autor/:id');
var _default = router;
exports["default"] = _default;