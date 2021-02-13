import LibrosShema from '../models/libro.model';

const getLibros = async(req, res) => {
    const data = await LibrosShema.find();
    console.log(data);
    res.status(200).json(data);

};
const getLibro = async(req, res) => {
    let id = req.params.id;
    const data = await LibrosShema.findById(id);
    /*     const data = await LibrosShema.findById(id, (data, err) => {
            if (!data) {
                res.status(400).json({ message: "no existe" })
            }
            if (err) {
                res.status(400).json({ err })
            } else {
                return data
            }
        }); */
    console.log(data);
    res.status(200).json(data);

};

const addLibro = async(req, res) => {
    let { titulo, autor, img, descripcion, comentarios, pdf } = req.body;
    const newLibro = new LibrosShema({
        titulo,
        autor,
        img,
        descripcion,
        comentarios,
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
    const deleteData = await LibrosShema.findByIdAndDelete(id);
    res.status(200).json(deleteData);
}



module.exports = {
    getLibros,
    getLibro,
    addLibro,
    editLibro,
    deleteLibro
}