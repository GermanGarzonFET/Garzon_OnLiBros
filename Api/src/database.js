import mongoose from 'mongoose';

//conexion a base de datos
mongoose.connect("mongodb://localhost:27017/onlibros", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB in On!!'))
    .then(err => console.log(err));