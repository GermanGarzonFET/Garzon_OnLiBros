import { Router } from 'express';
import comentariosController from '../controllers/comentarios.controller';
import { verifyToken, verifyUserComent } from '../middlewares/auntenticador';


const router = Router();

//obtener todos
router.get('/comentarios', comentariosController.getComentarios);
//obtener uno por id
router.get('/comentarios/:id');

//agregarautor
router.post('/comentarios', comentariosController.addComentario);

//editar
router.put('/comentarios/:id', [verifyToken, verifyUserComent], comentariosController.editComentario);
//eliminar
router.delete('/comentarios/:id', [verifyToken, verifyUserComent], comentariosController.deleteComentario);

export default router;