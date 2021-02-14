module.exports = {

    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/tienda',
    SECRET_KEY: 'mi_token'

}