import { Router } from 'express';
import { getUserRoles } from '../controllers/userRoles/getUserRole';
import { deleteUserRole } from '../controllers/userRoles/deleteUserRole';
import { updateUserRoles } from '../controllers/userRoles/updateUserRole';
import { createUserRole } from '../controllers/userRoles/createUserRoles';
import  authMiddleware  from '../middlewares/authMiddleware';
import { body, param } from 'express-validator';

const router = Router();


// Rutas privadas
router.get('api/users/userRoles:userId', [
  param('userId').isNumeric().withMessage('El ID del usuario debe ser un número'), // Validación del parámetro
], authMiddleware, getUserRoles); // Obtener rol de usuario por ID


// Rutas protegidas (requieren autenticación)
router.post('api/users/profile/userRoles', [
  body('userId').isNumeric().withMessage('El ID del usuario es requerido y debe ser un número'),
  body('roleId').isNumeric().withMessage('El ID del rol es requerido y debe ser un número'),
], authMiddleware, createUserRole); // Crear nuevo rol para usuario

router.put('api/users/profile/userRoles/:userId', [
  param('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
  body('roleIds').isArray().withMessage('Se requieren los IDs de los roles como un array'),
], authMiddleware, updateUserRoles); // Actualizar roles de usuario por ID

router.delete('api/users/profile/userRoles/:userId', [
  param('userId').isNumeric().withMessage('El ID del usuario debe ser un número'),
], authMiddleware, deleteUserRole); // Eliminar rol de usuario por ID

export default router;