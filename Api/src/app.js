//importaciones de las librerias
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';

import packageData from '../package.json';


//creando el servidor

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());


//rutas
app.get('/', (req, res) => {
    let nombre = packageData.name;
    let version = packageData.version;
    let author = packageData.author;
    let description = packageData.description;
    let dep = packageData.dependencies;
    let dev = packageData.devDependencies;
    res.json({
        "imformacion del proyecto": {
            nombre,
            version,
            author,
            description,
            "herramintas": {
                "librerias": [dep],
                "dependencies desarrollo": [dev]

            }
        },

    })
});


import librosRouter from './routes/libro.route';
import autorRouter from './routes/autor.route';
import generosRouter from './routes/generos.route';
import comentariosRouter from './routes/comentarios.route';
import usuariosRouter from './routes/usuarios.route';
import loginController from './routes/login.route';
import bibliotecaRouter from './routes/biblioteca.route';




app.use('/api', librosRouter);
app.use('/api', autorRouter);
app.use('/api', generosRouter);
app.use('/api', comentariosRouter);
app.use('/api', usuariosRouter);
app.use('/api', loginController);
app.use('/api/biblioteca', bibliotecaRouter);


//libs
import { createRoles } from './libs/onInit';
createRoles();

//exportando el app
module.exports = app;