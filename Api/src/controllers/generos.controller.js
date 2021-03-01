import GeneroSchema from '../models/genero.model';


//get generos
const getGeneros = async(req, res) => {
    const getGeneros = await GeneroSchema.find();
    res.status(200).json(getGeneros);
};
//get genero
const getGenero = async(req, res) => {
    let id = req.params.id;
    const data = await GeneroSchema.findById(id);
    res.status(200).json(data);
};

//add genero
const addGenero = async(req, res) => {
    let { nombre } = req.body;
    const newGenero = new GeneroSchema({
        nombre
    });
    const saveGenero = await newGenero.save();
    res.status(200).json(saveGenero);
};
//edit genero
const editGenero = async(req, res) => {
    let id = req.params.id;
    const upData = await GeneroSchema.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json(upData);
};
//delete genero
const deleteGenero = async(req, res) => {
    let id = req.params.id;
    await GeneroSchema.findByIdAndDelete(id);
    res.status(200).json({ messege: 'Ok' });
};
module.exports = {
    getGeneros,
    getGenero,
    addGenero,
    editGenero,
    deleteGenero
}