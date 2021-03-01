import AutoresSchema from '../models/autores.model';

//get all

const getAutores = async(req, res) => {

    const dataAutores = await AutoresSchema.find();
    res.status(200).json(dataAutores);
};
//get one

const getAutor = async(req, res) => {
    let id = req.params.id;
    const data = await AutoresSchema.findById(id);
    res.status(200).json(data);
};


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
};
//edit autor

const editAutor = async(req, res) => {
    let id = req.params.id;
    const upData = await AutoresSchema.findByIdAndUpdate(id, req.body, {
        new: true
    });
    res.status(200).json(upData);
};
//delete autor

const deleteAutor = async(req, res) => {
    let id = req.params.id;
    await AutoresSchema.findByIdAndDelete(id)
    res.status(200).json({ messege: 'ok' })
};


module.exports = {
    getAutores,
    getAutor,
    addAutor,
    editAutor,
    deleteAutor

}