"use strict";

var _usuarios = _interopRequireDefault(require("../models/usuarios.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var userData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _usuarios["default"].find();

          case 2:
            userData = _context.sent;
            res.status(200).json(userData);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id_user, userData;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id_user = req.params.id;
            _context2.next = 3;
            return _usuarios["default"].findById(id_user, function (err, data) {
              if (err) {
                res.status(400).json({
                  message: "user no encontrado"
                });
                return;
              }

              if (!data) {
                res.status(400).json({
                  message: "user no existe"
                });
              } else {
                return data;
              }
            });

          case 3:
            userData = _context2.sent;
            console.log(userData);
            res.status(200).json(userData);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUser(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

var addUser = function addUser(req, res) {
  var _req$body = req.body,
      nombre = _req$body.nombre,
      email = _req$body.email,
      pass = _req$body.pass,
      roles = _req$body.roles;
  res.json({
    message: 'get add'
  });
};

var editUser = function editUser(req, res) {
  res.json({
    message: 'get edit'
  });
};

var deleteUser = function deleteUser(req, res) {
  res.json({
    message: 'get delete'
  });
};

module.exports = {
  getUsers: getUsers,
  getUser: getUser,
  addUser: addUser,
  editUser: editUser,
  deleteUser: deleteUser
};