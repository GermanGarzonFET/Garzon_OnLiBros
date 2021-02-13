import { Schema, model } from 'mongoose';

const autoresSchema = new Schema({

    nombre: String,
    apellido: String,
    nacionalidad: String

}, {
    timestamps: true,
    versionKey: false
});


export default model('Autores', autoresSchema);