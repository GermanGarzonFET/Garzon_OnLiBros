import { Schema, model } from 'mongoose';

const librosShema = new Schema({
    titulo: String,
    autor: [{ //una propidad de tipo id que hace referencia a los autores
        ref: "Autores",
        type: Schema.Types.ObjectId
    }],
    genero: [{ //guarda a la id de los generos
        ref: "Generos",
        type: Schema.Types.ObjectId
    }],
    edicion: String,
    img: String,
    descripcion: String,
    comentarios: [{ type: String }], //es una array pero todabia no la uso falta el modelo de comentarios
    pdf: String // mientras colocare el link mientras configuro para que suba archivos

}, {
    timestamps: true,
    versionKey: false
});

export default model('Libros', librosShema);