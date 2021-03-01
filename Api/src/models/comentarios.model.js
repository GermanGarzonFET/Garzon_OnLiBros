import { Schema, model } from 'mongoose';


const comentariosSchema = new Schema({

    contenido: String,
    id_usuario: [{
        ref: "Usuarios",
        type: Schema.Types.ObjectId
    }]


}, {
    timestamps: true,
    versionKey: false
});


export default model('Comentarios', comentariosSchema);