"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _generos = _interopRequireDefault(require("../controllers/generos.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/genero', _generos["default"].getGeneros); //obtener uno por id

router.get('/genero/:id'); //agregarautor

router.post('/genero', _generos["default"].addGenero); //editar

router.put('/genero/:id'); //eliminar

router["delete"]('/genero/:id');
var _default = router;
exports["default"] = _default;