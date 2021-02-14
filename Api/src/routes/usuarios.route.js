import { Router } from 'express';
import usuariosController from '../controllers/usuarios.controller';

const router = Router();

//obtener todos
router.get('/usuario', usuariosController.getUsers);
//obtener uno por id
router.get('/usuario/:id', usuariosController.getUser);

//agregar
router.post('/usuario', usuariosController.addUser);

//editar
router.put('/usuario/:id', usuariosController.editUser);
//eliminar
router.delete('/usuario/:id', usuariosController.deleteUser);

export default router;