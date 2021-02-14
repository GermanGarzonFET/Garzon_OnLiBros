"use strict";

var _comentarios = _interopRequireDefault(require("../models/comentarios.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getComentarios = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var dataComentarios;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _comentarios["default"].find();

          case 2:
            dataComentarios = _context.sent;
            res.status(200).json(dataComentarios);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getComentarios(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addComentario = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, contenido, id_usuario, newComentario, saveComentario;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, contenido = _req$body.contenido, id_usuario = _req$body.id_usuario;
            newComentario = new _comentarios["default"]({
              contenido: contenido,
              id_usuario: id_usuario
            });
            _context2.next = 4;
            return newComentario.save();

          case 4:
            saveComentario = _context2.sent;
            res.status(200).json(saveComentario);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addComentario(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  getComentarios: getComentarios,
  addComentario: addComentario
};