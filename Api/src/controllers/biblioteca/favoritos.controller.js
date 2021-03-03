import favoristosSchema from '../../models/bliblioteca/favoritos.model';

const getFavoritos = async(req, res) => {
    const dataFavoritos = await favoristosSchema.find();
    res.status(200).json(dataFavoritos);
};
const addFavorito = async(req, res) => {

};
const deleteFavorito = async(req, res) => {

};

module.exports = {
    getFavoritos,
    addFavorito,
    deleteFavorito
}