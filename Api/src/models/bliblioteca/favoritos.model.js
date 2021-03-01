import { Schema, model } from 'mongoose';

const favoristosSchema = new Schema({

    id_libro: [{
        ref: "Libros",
        type: Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
});

export default model('Favoritos', favoristosSchema);