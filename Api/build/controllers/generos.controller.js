"use strict";

var _genero = _interopRequireDefault(require("../models/genero.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getGeneros = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var getGeneros;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _genero["default"].find();

          case 2:
            getGeneros = _context.sent;
            res.status(200).json(getGeneros);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getGeneros(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addGenero = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var nombre, newGenero, saveGenero;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            nombre = req.body.nombre;
            newGenero = new _genero["default"]({
              nombre: nombre
            });
            _context2.next = 4;
            return newGenero.save();

          case 4:
            saveGenero = _context2.sent;
            res.status(200).json(saveGenero);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addGenero(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

module.exports = {
  getGeneros: getGeneros,
  addGenero: addGenero
};