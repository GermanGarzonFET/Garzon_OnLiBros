"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _login = _interopRequireDefault(require("../controllers/login.controller"));

var _login2 = require("../middlewares/login");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/register', [_login2.chekUserExisted, _login2.chekRoleExisted], _login["default"].register);
router.post('/login', _login["default"].iniciar);
var _default = router;
exports["default"] = _default;