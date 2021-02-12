import { Schema, model } from 'mongoose';

const librosShema = new Schema({
    titulo: String,
    autor: String, //mientras se crea el modelo de autores
    img: String,
    descripcion: String,
    comentarios: [{ type: String }], //es una array pero todabia no la uso falta el modelo de comentarios
    pdf: String // mientras colocare el link mientras configuro para que suba archivos

}, {
    timestamps: true,
    versionKey: false
});

export default model('Libros', librosShema);