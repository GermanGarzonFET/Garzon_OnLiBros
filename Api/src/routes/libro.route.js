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
router.put('/libros/:id', libroController.editLibro);
//eliminar
router.delete('/libros/:id', libroController.deleteLibro);

export default router;