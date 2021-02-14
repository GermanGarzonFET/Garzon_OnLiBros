"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

var _libro = _interopRequireDefault(require("./routes/libro.route"));

var _autor = _interopRequireDefault(require("./routes/autor.route"));

var _generos = _interopRequireDefault(require("./routes/generos.route"));

var _comentarios = _interopRequireDefault(require("./routes/comentarios.route"));

var _usuarios = _interopRequireDefault(require("./routes/usuarios.route"));

var _login = _interopRequireDefault(require("./routes/login.route"));

var _onInit = require("./libs/onInit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importaciones de las librerias
//creando el servidor
var app = (0, _express["default"])();
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use((0, _helmet["default"])()); //rutas

app.get('/', function (req, res) {
  var nombre = _package["default"].name;
  var version = _package["default"].version;
  var author = _package["default"].author;
  var description = _package["default"].description;
  var dep = _package["default"].dependencies;
  var dev = _package["default"].devDependencies;
  res.json({
    "imformacion del proyecto": {
      nombre: nombre,
      version: version,
      author: author,
      description: description,
      "herramintas": {
        "librerias": [dep],
        "dependencies desarrollo": [dev]
      }
    }
  });
});
app.use('/api', _libro["default"]);
app.use('/api', _autor["default"]);
app.use('/api', _generos["default"]);
app.use('/api', _comentarios["default"]);
app.use('/api', _usuarios["default"]);
app.use('/api', _login["default"]); //libs

(0, _onInit.createRoles)(); //exportando el app

module.exports = app;