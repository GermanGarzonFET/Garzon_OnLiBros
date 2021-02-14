import { Router } from 'express';
import comentariosController from '../controllers/comentarios.controller';


const router = Router();

//obtener todos
router.get('/comentarios', comentariosController.getComentarios);
//obtener uno por id
router.get('/comentarios/:id');

//agregarautor
router.post('/comentarios', comentariosController.addComentario);

//editar
router.put('/comentarios/:id');
//eliminar
router.delete('/comentarios/:id');

export default router;