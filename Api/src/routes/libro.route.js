import { Router } from 'express';
import libroController from '../controllers/libros.controller';


const router = Router();

//obtener todos
router.get('/libros', libroController.getLibros);
//obtener uno por id
router.get('/libros/:id', libroController.getLibro);

//agregar
router.post('/libros', libroController.addLibro);

//editar

//eliminar


export default router;