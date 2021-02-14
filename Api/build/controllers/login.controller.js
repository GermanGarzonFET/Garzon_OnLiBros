"use strict";

var _usuarios = _interopRequireDefault(require("../models/usuarios.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _roles = _interopRequireDefault(require("../models/roles.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, nombre, email, pass, rol, newUsuario, foundRol, _rol, saveUsuario, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, email = _req$body.email, pass = _req$body.pass, rol = _req$body.rol;
            _context.t0 = _usuarios["default"];
            _context.t1 = nombre;
            _context.t2 = email;
            _context.next = 6;
            return _usuarios["default"].encryptPass(pass);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = {
              nombre: _context.t1,
              email: _context.t2,
              pass: _context.t3
            };
            newUsuario = new _context.t0(_context.t4);

            if (!rol) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _roles["default"].find({
              name: {
                $in: rol
              }
            });

          case 12:
            foundRol = _context.sent;
            newUsuario.roles = foundRol.map(function (roles) {
              return roles._id;
            });
            _context.next = 20;
            break;

          case 16:
            _context.next = 18;
            return _roles["default"].findOne({
              name: "user"
            });

          case 18:
            _rol = _context.sent;
            newUsuario.roles = [_rol._id];

          case 20:
            _context.next = 22;
            return newUsuario.save();

          case 22:
            saveUsuario = _context.sent;
            token = _jsonwebtoken["default"].sign({
              id: saveUsuario._id
            }, _config["default"].SECRET_KEY, {
              expiresIn: 86400 //24 horas

            });
            res.json(token);

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var iniciar = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, pass, usuarioExiste, comparePass, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, pass = _req$body2.pass;
            _context2.next = 3;
            return _usuarios["default"].findOne({
              email: email
            }).populate("rol");

          case 3:
            usuarioExiste = _context2.sent;

            if (usuarioExiste) {
              _context2.next = 7;
              break;
            }

            res.status(400).json({
              message: "email no found"
            });
            return _context2.abrupt("return");

          case 7:
            ;
            _context2.next = 10;
            return _usuarios["default"].comparePass(pass, usuarioExiste.pass);

          case 10:
            comparePass = _context2.sent;

            if (comparePass) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'contraseña mal'
            }));

          case 13:
            token = _jsonwebtoken["default"].sign({
              id: usuarioExiste._id
            }, _config["default"].SECRET_KEY, {
              expiresIn: 86400 //24 horas

            });
            res.json(token);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function iniciar(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  register: register,
  iniciar: iniciar
};