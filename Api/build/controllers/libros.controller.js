"use strict";

var _libro = _interopRequireDefault(require("../models/libro.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLibros = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _libro["default"].find();

          case 2:
            data = _context.sent;
            console.log(data);
            res.status(200).json(data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getLibros(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var getLibro = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.next = 3;
            return _libro["default"].findById(id);

          case 3:
            data = _context2.sent;

            /*     const data = await LibrosShema.findById(id, (data, err) => {
                    if (!data) {
                        res.status(400).json({ message: "no existe" })
                    }
                    if (err) {
                        res.status(400).json({ err })
                    } else {
                        return data
                    }
                }); */
            console.log(data);
            res.status(200).json(data);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLibro(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var addLibro = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, titulo, autor, img, descripcion, comentarios, pdf, newLibro, saveLibro;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, titulo = _req$body.titulo, autor = _req$body.autor, img = _req$body.img, descripcion = _req$body.descripcion, comentarios = _req$body.comentarios, pdf = _req$body.pdf;
            newLibro = new _libro["default"]({
              titulo: titulo,
              autor: autor,
              img: img,
              descripcion: descripcion,
              comentarios: comentarios,
              pdf: pdf
            });
            _context3.next = 4;
            return newLibro.save();

          case 4:
            saveLibro = _context3.sent;
            res.status(201).json(saveLibro);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addLibro(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  getLibros: getLibros,
  getLibro: getLibro,
  addLibro: addLibro
};