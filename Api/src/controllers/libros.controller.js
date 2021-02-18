import LibrosShema from '../models/libro.model';

const getLibros = async(req, res) => {
    const data = await LibrosShema.find();
    res.status(200).json(data);

};
const getLibro = async(req, res) => {
    let id = req.params.id;
    const data = await LibrosShema.findById(id);
    res.status(200).json(data);

};

const addLibro = async(req, res) => {
    let { titulo, id_autor, id_genero, edicion, img, descripcion, id_comentarios, pdf } = req.body;
    const newLibro = new LibrosShema({
        titulo,
        id_autor,
        id_genero,
        edicion,
        img,
        descripcion,
        id_comentarios,
        pdf
    })
    const saveLibro = await newLibro.save();
    res.status(201).json(saveLibro);
};


const editLibro = async(req, res) => {
    let id = req.params.id;
    const upData = await LibrosShema.findByIdAndUpdate(id, req.body, {
        new: true
    });

    res.status(200).json(upData);
}

const deleteLibro = async(req, res) => {
    let id = req.params.id;
    await LibrosShema.findByIdAndDelete(id);
    res.status(200).json({ message: "ok" });
}



module.exports = {
    getLibros,
    getLibro,
    addLibro,
    editLibro,
    deleteLibro
}