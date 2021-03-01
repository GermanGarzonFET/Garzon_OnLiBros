import { Router } from 'express';
import generoController from '../controllers/generos.controller';
import { verifyToken, isAdmin, isModerator } from '../middlewares/auntenticador';



const router = Router();

//obtener todos
router.get('/genero', generoController.getGeneros);
//obtener uno por id
router.get('/genero/:id', generoController.getGenero);

//agregarautor
router.post('/genero', [verifyToken, isAdmin], generoController.addGenero);

//editar
router.put('/genero/:id', [verifyToken, isAdmin], generoController.editGenero);
//eliminar
router.delete('/genero/:id', [verifyToken, isAdmin], generoController.deleteGenero);

export default router;