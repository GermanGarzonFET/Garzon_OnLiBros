import { Router } from 'express';
import libroController from '../controllers/libros.controller';
import { verifyToken, isAdmin, isModerator, verifyLibro } from '../middlewares/auntenticador';


const router = Router();

//obtener todos
router.get('/libros', libroController.getLibros);
//obtener uno por id
router.get('/libros/:id', verifyLibro, libroController.getLibro);

//agregar
router.post('/libros', [verifyToken, isAdmin], libroController.addLibro);

//editar
router.put('/libros/:id', [verifyToken, verifyLibro, isModerator], libroController.editLibro);
//eliminar
router.delete('/libros/:id', [verifyToken, verifyLibro, isAdmin], libroController.deleteLibro);

export default router;