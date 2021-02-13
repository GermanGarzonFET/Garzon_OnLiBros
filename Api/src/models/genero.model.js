import { Schema, model } from 'mongoose';

const generoSchema = new Schema({
    nombre: String,

}, {
    versionKey: false
})

export default model("Generos", generoSchema);