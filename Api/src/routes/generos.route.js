import { Router } from 'express';
import generoController from '../controllers/generos.controller';


const router = Router();

//obtener todos
router.get('/genero', generoController.getGeneros);
//obtener uno por id
router.get('/genero/:id');

//agregarautor
router.post('/genero', generoController.addGenero);

//editar
router.put('/genero/:id');
//eliminar
router.delete('/genero/:id');

export default router;