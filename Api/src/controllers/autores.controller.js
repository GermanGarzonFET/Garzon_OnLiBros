import AutoresSchema from '../models/autores.model';

//get all

const getAutores = async(req, res) => {

        const dataAutores = await AutoresSchema.find();
        res.status(200).json(dataAutores);
    }
    //get one

//add autor

const addAutor = async(req, res) => {
    let { nombre, apellido, nacionalidad } = req.body;
    const newAutor = new AutoresSchema({
        nombre,
        apellido,
        nacionalidad
    });
    const saveAutor = await newAutor.save();
    res.status(200).json(saveAutor);
}


module.exports = {
    getAutores,
    addAutor

}