"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chekRoleExisted = exports.chekUserExisted = void 0;

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _usuarios = _interopRequireDefault(require("../models/usuarios.model"));

var _roles = _interopRequireDefault(require("../models/roles.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var chekUserExisted = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var nombre, email, Nombre, Email;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nombre = req.body.nombre;
            email = req.body.email;
            _context.next = 4;
            return _usuarios["default"].findOne({
              nombre: nombre
            });

          case 4:
            Nombre = _context.sent;
            _context.next = 7;
            return _usuarios["default"].findOne({
              email: email
            });

          case 7:
            Email = _context.sent;

            if (!Nombre) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "El  nombre de usuario ya existe"
            }));

          case 10:
            ;

            if (!Email) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: "El  email ya se encuentra en uso"
            }));

          case 13:
            ;
            next();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function chekUserExisted(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.chekUserExisted = chekUserExisted;

var chekRoleExisted = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var Roles, rol, i;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            Roles = ["admin", "moderator", "user"];
            rol = req.body.rol;
            console.log(rol);
            console.log(rol);

            if (!rol) {
              _context2.next = 13;
              break;
            }

            i = 0;

          case 6:
            if (!(i < rol.length)) {
              _context2.next = 13;
              break;
            }

            console.log(rol[i]);

            if (Roles.includes(rol[i])) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Role ".concat(rol[i], " no existe")
            }));

          case 10:
            i++;
            _context2.next = 6;
            break;

          case 13:
            next();

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function chekRoleExisted(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.chekRoleExisted = chekRoleExisted;