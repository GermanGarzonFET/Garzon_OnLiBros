import { Router } from 'express';
import FavoritosController from '../controllers/biblioteca/favoritos.controller';

const router = Router();

//favoritos
router.get('/favoritos', FavoritosController.getFavoritos);

export default router;