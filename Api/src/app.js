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

app.use('/api', librosRouter);


//exportando el app
module.exports = app;