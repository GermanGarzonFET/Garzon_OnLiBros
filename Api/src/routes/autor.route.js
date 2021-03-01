import { Router } from 'express';
import autorController from '../controllers/autores.controller';
import { verifyToken, isAdmin, isModerator } from '../middlewares/auntenticador';


const router = Router();

//obtener todos
router.get('/autor', autorController.getAutores);
//obtener uno por id
router.get('/autor/:id', autorController.getAutor);
//agregarautor
router.post('/autor', [verifyToken, isAdmin], autorController.addAutor);
//editar
router.put('/autor/:id', [verifyToken, isAdmin], autorController.editAutor);
//eliminar
router.delete('/autor/:id', [verifyToken, isAdmin], autorController.deleteAutor);

export default router;