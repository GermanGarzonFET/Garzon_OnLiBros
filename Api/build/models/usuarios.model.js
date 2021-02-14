"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UsuariosSchema = new _mongoose.Schema({
  nombre: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  pass: {
    type: String,
    required: true
  },
  roles: [{
    //aqui van los rolres que tenga (admin,moderador,usuario etc)
    ref: "Roles",
    type: _mongoose.Schema.Types.ObjectId
  }]
}, {
  timestamps: true
});
UsuariosSchema["static"]('encryptPass', function (pass) {
  return _bcryptjs["default"].hashSync(pass, _bcryptjs["default"].genSaltSync(5), null);
});
UsuariosSchema["static"]('comparePass', function (pass, recivePass) {
  return _bcryptjs["default"].compare(pass, recivePass);
});

var _default = (0, _mongoose.model)("Usuarios", UsuariosSchema);

exports["default"] = _default;