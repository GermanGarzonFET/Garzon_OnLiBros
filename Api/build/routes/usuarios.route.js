"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usuarios = _interopRequireDefault(require("../controllers/usuarios.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)(); //obtener todos

router.get('/usuario', _usuarios["default"].getUsers); //obtener uno por id

router.get('/usuario/:id', _usuarios["default"].getUser); //agregar

router.post('/usuario', _usuarios["default"].addUser); //editar

router.put('/usuario/:id', _usuarios["default"].editUser); //eliminar

router["delete"]('/usuario/:id', _usuarios["default"].deleteUser);
var _default = router;
exports["default"] = _default;