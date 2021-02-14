import { Schema, model } from 'mongoose';


const comentariosSchema = new Schema({

    contenido: String,
    id_usuario: [{
        type: String
    }]


}, {
    timestamps: true,
    versionKey: false
});


export default model('Comentarios', comentariosSchema);