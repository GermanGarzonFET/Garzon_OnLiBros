import { Schema, model } from 'mongoose';

const leidosSchema = new Schema({

    id_libro: [{
        ref: "Libros",
        type: Schema.Types.ObjectId
    }]

}, {
    timestamps: true,
    versionKey: false
});

export default model('Leidos', leidosSchema);