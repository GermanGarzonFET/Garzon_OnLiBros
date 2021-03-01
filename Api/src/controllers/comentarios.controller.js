import comentariosSchema from '../models/comentarios.model';
import LibrosShema from '../models/libro.model';
import jwt from 'jsonwebtoken';
import conf from '../config';



const getComentarios = async(req, res) => {
    const dataComentarios = await comentariosSchema.find();
    res.status(200).json(dataComentarios);
}

const addComentario = async(req, res) => {

    const token = req.headers["x-token"];
    const decode = jwt.verify(token, conf.SECRET_KEY);
    const id_usuario = decode.id;
    console.log(id_usuario);


    const { contenido, id_libro } = req.body;



    const newComentario = new comentariosSchema({
        contenido,
        id_usuario
    });

    await LibrosShema.findByIdAndUpdate(id_libro, {
        $push: {
            id_comentarios: newComentario._id
        }
    });

    const saveComentario = await newComentario.save();

    res.status(200).json(saveComentario);
};


const editComentario = async(req, res) => {
    let id = req.params.id;
    const upData = await comentariosSchema.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json(upData);

};

const deleteComentario = async(req, res) => {
    let id = req.params.id;
    await comentariosSchema.findByIdAndDelete(id);
    res.status(200).json({ message: "ok" });



};

module.exports = {
    getComentarios,
    addComentario,
    editComentario,
    deleteComentario
}