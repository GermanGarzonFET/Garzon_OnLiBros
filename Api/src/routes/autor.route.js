import { Router } from 'express';
import autorController from '../controllers/autores.controller';


const router = Router();

//obtener todos
router.get('/autor', autorController.getAutores);
//obtener uno por id
router.get('/autor/:id');

//agregarautor
router.post('/autor', autorController.addAutor);

//editar
router.put('/autor/:id');
//eliminar
router.delete('/autor/:id');

export default router;