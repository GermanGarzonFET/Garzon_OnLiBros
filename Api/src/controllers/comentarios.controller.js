import comentariosSchema from '../models/comentarios.model';



const getComentarios = async(req, res) => {
    const dataComentarios = await comentariosSchema.find();
    res.status(200).json(dataComentarios);
}

const addComentario = async(req, res) => {
    const { contenido, id_usuario } = req.body;
    const newComentario = new comentariosSchema({
        contenido,
        id_usuario
    });
    const saveComentario = await newComentario.save();
    res.status(200).json(saveComentario);
};


module.exports = {
    getComentarios,
    addComentario
}