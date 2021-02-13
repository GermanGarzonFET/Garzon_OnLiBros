import GeneroSchema from '../models/genero.model';

const getGeneros = async(req, res) => {
    const getGeneros = await GeneroSchema.find();
    res.status(200).json(getGeneros);
}

const addGenero = async(req, res) => {
    let { nombre } = req.body;
    const newGenero = new GeneroSchema({
        nombre
    });
    const saveGenero = await newGenero.save();
    res.status(200).json(saveGenero);
}

module.exports = {
    getGeneros,
    addGenero
}