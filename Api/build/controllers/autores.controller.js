"use strict";

var _autores = _interopRequireDefault(require("../models/autores.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//get all
var getAutores = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var dataAutores;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _autores["default"].find();

          case 2:
            dataAutores = _context.sent;
            res.status(200).json(dataAutores);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAutores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //get one
//add autor


var addAutor = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, nombre, apellido, nacionalidad, newAutor, saveAutor;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, nacionalidad = _req$body.nacionalidad;
            newAutor = new _autores["default"]({
              nombre: nombre,
              apellido: apellido,
              nacionalidad: nacionalidad
            });
            _context2.next = 4;
            return newAutor.save();

          case 4:
            saveAutor = _context2.sent;
            res.status(200).json(saveAutor);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addAutor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  getAutores: getAutores,
  addAutor: addAutor
};