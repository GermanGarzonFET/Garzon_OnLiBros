"use strict";

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

var _libro = _interopRequireDefault(require("./routes/libro.route"));

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
app.use('/api', _libro["default"]); //exportando el app

module.exports = app;